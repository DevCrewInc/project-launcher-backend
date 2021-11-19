import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_Semestre } from "../enums/Enums";
import { ProjectModel } from "./Proyectos";

const resolversProyecto = {
    Query: {
    Proyectos: async (parent, args) => {
        const proyectos = await ProjectModel.find().populate('lider').populate('avances').populate('inscripciones');
        return proyectos;
    },
    },
    Mutation: {
    crearProyecto: async (parent, args) => {
        const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
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
            objetivos: args.objetivos,

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

        else if (args.faseProyecto==='DESARROLLO'&& args.estadoProyecto==='ACTIVO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                faseProyecto: args.faseProyecto
                
            },{new:true})
            return proyectoEditado;
        }

        else if(args.faseProyecto==='TERMINADO' && args.estadoProyecto==='ACTIVO'){
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
            return proyectoEditado
        }
        else if(args.estadoProyecto==='ACTIVO' && args.faseProyecto==='DESARROLLO' || args.estadoProyecto==='ACTIVO' && args.faseProyecto==='INICIADO'){
            const proyectoEditado= await ProjectModel.findByIdAndUpdate(args._id,{
                estadoProyecto:args.estadoProyecto
            },{new:true});
            return proyectoEditado
        }

    }
    },
};
    
    export { resolversProyecto };