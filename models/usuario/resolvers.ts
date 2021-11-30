import { Enum_EstadoUsuario, Enum_Rol } from "../enums/Enums";
import { UserModel } from "./Usuarios"

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
        const usuario = await UserModel.findOne({ _id: args._id });
        return usuario;
    },

    
    SolicitudesNuevosUsuarios: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({ estado: Enum_EstadoUsuario.PENDIENTE});
        return usuariosEnEspera;
    },
    //LIDER  

    SolicitudesNuevosEstudiantes: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({ estado: Enum_EstadoUsuario.PENDIENTE, rol:Enum_Rol.ESTUDIANTE});
        return usuariosEnEspera;
    },
    Estudiantes: async (parent, args) =>{
        const usuariosEnEspera = await UserModel.find({ estado: Enum_EstadoUsuario.AUTORIZADO, rol:Enum_Rol.ESTUDIANTE,eliminado: false});
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
            // const liderProyecto = await UserModel.findOne({_id: args._id }).populate('proyectosLiderados')
            // console.log( JSON.stringify(liderProyecto))
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                identificacion: args.identificacion,
                correo: args.correo,
                facultad: args.facultad,
                semestre: args.semestre,

            },{new: true});

            return usuarioEditado;
        },
        editarEstadoUsuario:async (parent, args)=>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                estado:args.estado
            },{new: true})
            return usuarioEditado
        },

        eliminarUsuario: async (parent, args) =>{
                const usuarioEliminado = await UserModel.findByIdAndUpdate(args._id,{
                    eliminado: true});
                return usuarioEliminado;
            
        },
        
    },
};
    
    export { resolversUsuario };