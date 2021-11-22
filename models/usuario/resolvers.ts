import { UserModel } from "./Usuarios"

const resolversUsuario = {
    Query: {
    Usuarios: async (parent, args) => { // es el usuario que se creó en query en types
        const usuarios = await UserModel.find().populate('proyectosLiderados').populate('inscripciones').populate('avancesCreados');
        return usuarios;
    },

    Usuario: async (parent, args) => {
        const usuario = await UserModel.findOne({ _id: args._id });
        return usuario;
    },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
        const usuarioCreado = await UserModel.create({
            nombre: args.nombre,
            apellido: args.apellido,
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
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                facultad: args.facultad,
                semestre: args.semestre,
                rol: args.rol,
                estado: args.estado,
            },{new: true});

            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) =>{
            if (Object.keys(args).includes('_id')){
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id});
                return usuarioEliminado;
            }else if(Object.keys(args).includes('correo')){
                const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo});
                return usuarioEliminado;
            }
        },
    },
};
    
    export { resolversUsuario };