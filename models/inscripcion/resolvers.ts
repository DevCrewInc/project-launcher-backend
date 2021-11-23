import { InscriptionModel } from "./Inscripcion"


const resolverInscripciones = {
    Query: {
        Inscripciones: async (parent, args) =>{
            const inscripciones = await InscriptionModel.find().populate('estudiante').populate('proyecto');
            return inscripciones;
        },
    },
    Mutation:{
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },

        editarEstado: async (parent, args) =>{
            const busquedaProyecto = await InscriptionModel.findOne({proyecto: args.proyecto}).populate('proyecto')
            const proyecto = JSON.parse(JSON.stringify(busquedaProyecto.proyecto))
            
            if(args.estado === "ACEPTADA" ){
                const inscripcionActualizada = await InscriptionModel.findByIdAndUpdate(args._id,{
                    estado: args.estado,
                    fechaIngreso: new Date().toISOString().split("T")[0],
                },{new:true});
                return inscripcionActualizada;
            }
            else{
                const inscripcionActualizada = await InscriptionModel.findByIdAndUpdate(args._id,{
                    estado: args.estado,
                    fechaEgreso: new Date().toISOString().split("T")[0],
                },{new:true});
                return inscripcionActualizada;
            }

        }
    },

}

export {resolverInscripciones};