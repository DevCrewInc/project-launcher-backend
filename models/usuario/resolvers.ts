import { argsToArgsConfig } from "graphql/type/definition";
import { Enum_EstadoUsuario, Enum_Rol } from "../enums/Enums";
import { UserModel } from "./Usuarios"
import bcrypt from 'bcrypt';

const resolversUsuario = {
    Query: {
      //ADMIN  
    Usuarios: async (parent, args) => { // es el usuario que se creó en query en types
        const usuarios = await UserModel.find({eliminado: false}).populate({
            path:'proyectosLiderados',
            populate: {path:'avances', populate: 'creadoPor'}
        }).populate('inscripciones').populate('avancesCreados');
        
        return usuarios;
    },
    Usuario: async (parent, args) => {
        const usuario = await UserModel.findOne({ _id: args._id }).populate({
            path:"inscripciones",
            populate: {path:'proyecto' ,populate:{path:"lider"}}
        }).populate({
            path:"inscripciones",
            populate: {path:'proyecto',populate:{path:"avances",populate:{path:"observaciones"}}}
        });
        return usuario;
    },
        UsuarioInfo: async (parent, args) => {
        const usuario = await UserModel.findOne({ _id: args._id })
        return usuario;
    },

    
    SolicitudesNuevosUsuarios: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({ estado: Enum_EstadoUsuario.PENDIENTE,eliminado: false});
        return usuariosEnEspera;
    },
    //LIDER  

    SolicitudesNuevosEstudiantes: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({ estado: Enum_EstadoUsuario.PENDIENTE, rol:Enum_Rol.ESTUDIANTE});
        return usuariosEnEspera;
    },
    Estudiantes: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({  rol:Enum_Rol.ESTUDIANTE,eliminado: false});
        return usuariosEnEspera;

    },

},
    Mutation: {
        crearUsuario: async (parent, args) => {
        const usuarioCreado = await UserModel.create({
            nombre: args.nombre,
            identificacion: args.identificacion,
            correo: args.correo,
            facultad: args.facultad,
            semestre: args.semestre,
            rol: args.rol,
        });
    
        if (Object.keys(args).includes('estado')) {
            usuarioCreado.estado = args.estado;
        }
    
        return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('celular')) {
                const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                    celular:args.celular,
                },{new: true});
                return usuarioEditado;
            }
            if (Object.keys(args).includes('aboutMe')) {
                const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                    aboutMe:args.aboutMe,
                },{new: true});
                return usuarioEditado;
            }
        },
        editarEstadoUsuario:async (parent, args)=>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                estado:args.estado
            },{new: true})
            return usuarioEditado
        },

        editarContrasena:async (parent, args)=>{
            const usuarioEncontrado = await UserModel.findById(args._id);
            if (await bcrypt.compare(args.contrasena, usuarioEncontrado.contrasena)){
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(args.contrasenaNueva, salt);

                usuarioEncontrado.contrasena=hashedPassword;
                usuarioEncontrado.save();
                return true
            }
            return false
        },

        eliminarUsuario: async (parent, args) =>{
                const usuarioEliminado = await UserModel.findByIdAndUpdate(args._id,{
                    eliminado: true});
                return usuarioEliminado;
            
        },
        
    },
};
    
    export { resolversUsuario };