import { Enum_FaseProyecto } from '../enums/Enums';
import { ProjectModel } from '../proyecto/Proyectos';
import { ModeloAvance } from './Avances';

const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
        const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
            return avances;
    },
        filtrarAvance: async (parent, args) => {
        const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id})
            .populate('proyecto')
            .populate('creadoPor');
            return avanceFiltrado;
    },
},
Mutation: {
    crearAvance: async (parent, args) => {
        const avanceCreado = await ModeloAvance.create({
            fecha: new Date().toISOString().split("T")[0],
            tituloAvance: args.tituloAvance,
            descripcion: args.descripcion,
            proyecto: args.proyecto,
            creadoPor: args.creadoPor,
    });
    const DesarolloProyecto = await ProjectModel.findById(args.proyecto)
    if(DesarolloProyecto.faseProyecto==="INICIADO"){
        DesarolloProyecto.faseProyecto=Enum_FaseProyecto.DESARROLLO
        DesarolloProyecto.save()
    }

    return avanceCreado;
    },

    editarAvance: async (parent, args) => {
        const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id, {
            tituloAvance: args.tituloAvance,
            descripcion: args.descripcion,
    },{new: true});
    return avanceEditado;
    },

    eliminarAvance: async(parent,args) => {
        if (Object.keys(args).includes('_id')){
            const usuarioEliminado = await ModeloAvance.findOneAndDelete({ _id: args._id});
            return usuarioEliminado;
        }else if(Object.keys(args).includes('creadoPor')){
            const usuarioEliminado = await ModeloAvance.findOneAndDelete({ creadoPor: args.creadoPor});
            return usuarioEliminado;
        }
    },

    //LIDER

    crearObservacion: async (parent, args) => {
        const observacionCreada = await ModeloAvance.findByIdAndUpdate(args.IdAvance,{
           observaciones: args.observaciones
            
        },{new:true});
        return observacionCreada;
    },

    // editarObservacion: async (parent, args) =>{
    //     const avanceConObservacion = await ModeloAvance.findById(args.IdAvance)
    //     avanceConObservacion.observaciones[args.indexObservacion] = {...args.campos}
    //     avanceConObservacion.save()
    //     console.log(avanceConObservacion.observaciones[args.indexObservacion])
    //     return avanceConObservacion;
    // },
    editarObservacion: async (parent, args) => {
        const avanceConObservacion = await ModeloAvance.findByIdAndUpdate(
            args.IdAvance,{
            observaciones: args.observaciones
        },{ new: true }
        );
        return avanceConObservacion;
    },

    eliminarObservacion: async (parent, args) => {
        const observacionEliminada = await ModeloAvance.findByIdAndUpdate({_id: args.IdAvance},
            { $unset: { observaciones: args.observaciones} },  { new: true });
        return observacionEliminada;

    }
}
};


export { resolversAvance };