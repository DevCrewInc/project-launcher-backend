import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_Semestre } from "../enums/Enums";
import { InscriptionModel } from "../inscripcion/Inscripcion";
import { ProjectModel } from "./Proyectos";

const resolversProyecto = {
    Query: {
 //ADMIN   
    ListaProyectosAdmin: async (parent, args) => {
        const proyectos = await ProjectModel.find().populate('lider').populate('avances').populate('inscripciones');
        return proyectos;
    },
    SolicitudesNuevosProyectos: async (parent, args) =>{
        const proyectos = await ProjectModel.find({faseProyecto: Enum_FaseProyecto.NULO}).populate('lider');
        return proyectos;
    },
    
//ESTUDIANTE
    ListaProyectosEstudiante: async (parent, args) => {
       
        const proyectos = await ProjectModel.find({estadoProyecto: Enum_EstadoProyecto.ACTIVO }).populate('lider').populate('avances').populate({
            path:'inscripciones',
            populate :{path:"estudiante"}
        });
        return proyectos;
    },


//LIDER
    ProyectosLider: async (parent, args) => {
        const proyectos = await ProjectModel.find({lider: args._id}).populate('lider').populate('avances').populate('inscripciones');
        return proyectos;
    },
    Proyecto: async (parent, args) => {
        const proyecto= await  ProjectModel.findOne({_id: args._id}).populate('lider').populate({
            path:'avances',
            populate:{path:'creadoPor'}
        }).populate({
            path:'inscripciones',
            populate:{path:'estudiante'}
        });
        return proyecto;
    }


    },
    Mutation: {
    crearProyecto: async (parent, args) => {
        const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        descripcionProyecto: args.descripcionProyecto,
        fechaEstimada: args.fechaEstimada,
        lider: args.lider,
        objetivos: args.objetivos
        });
        return proyectoCreado;
    },
    eliminarProyecto: async (parent,args)=>{
        const proyectoEliminado = await ProjectModel.findByIdAndDelete(args._id)
        return proyectoEliminado;
    },
    editarProyectoLider: async(parent,args)=>{

        const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id,{

            nombre: args.nombre,
            presupuesto: args.presupuesto,
            descripcionProyecto:args.descripcionProyecto

        },{new: true});

        return proyectoEditado;
    },
    editarEstadoProyecto: async (parent,args)=>{

        if(args.estadoProyecto === 'ACTIVO' && args.faseProyecto==='NULO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:args.estadoProyecto,
                faseProyecto:Enum_FaseProyecto.INICIADO,
                fechaInicio:new Date().toISOString().split("T")[0]
    
            },{new:true});
            return proyectoEditado;
        }

        else if( args.estadoProyecto==='ACTIVO' && args.faseProyecto==='DESARROLLO' || args.faseProyecto==='DESARROLLO'&& args.estadoProyecto==='ACTIVO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:args.estadoProyecto,
                faseProyecto: args.faseProyecto
            },{new:true});
            return proyectoEditado
        }

        // else if (args.faseProyecto==='DESARROLLO'&& args.estadoProyecto==='ACTIVO'){
        //     const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
        //         faseProyecto: args.faseProyecto
                
        //     },{new:true})
        //     return proyectoEditado;
        // }

        else if(args.faseProyecto==='TERMINADO' && args.estadoProyecto==='ACTIVO'){
        
            const edicionInscripciones = await InscriptionModel.updateMany({proyecto: args._id},{
                fechaEgreso: new Date().toISOString().split("T")[0],
            })
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:Enum_EstadoProyecto.INACTIVO,
                faseProyecto: args.faseProyecto,
                fechaFin:new Date().toISOString().split("T")[0]
            },{new:true});
            return proyectoEditado
        }
        else if(args.estadoProyecto==='INACTIVO' && args.faseProyecto==='DESARROLLO' || args.estadoProyecto==='INACTIVO' && args.faseProyecto==='INICIADO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:args.estadoProyecto

            },{new:true});
            await InscriptionModel.deleteMany({proyecto:args._id})
            return proyectoEditado
        }
        
        else if( args.estadoProyecto==='ACTIVO' && args.faseProyecto==='INICIADO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:args.estadoProyecto
            },{new:true});
            return proyectoEditado
        }

    },

    crearObjetivo: async (parent, args) => {
        const objetivoCreado = await ProjectModel.findByIdAndUpdate(args.IdProyecto,{
            $addToSet: {
                objetivos: {...args.campos}
            } 
        },{new:true});
        return objetivoCreado;

    },

    editarObjetivo: async (parent, args) =>{
        const proyectoEncontrado=await ProjectModel.findById(args.IdProyecto)
        proyectoEncontrado.objetivos[args.indexObjetivo]={...args.campos}
        proyectoEncontrado.save()
        return proyectoEncontrado
    },
    
    eliminarObjetivo: async (parent, args) => {
        const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
          { _id: args.IdProyecto },
          {
            $pull: {
              objetivos: {
                _id: args.idObjetivo,
              },
            },
          },
          { new: true }
        );
        return proyectoObjetivo;
      },
}
   
}

    
    export { resolversProyecto };