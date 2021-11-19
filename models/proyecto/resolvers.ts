import { ProjectModel } from "./Proyectos";

const resolversProyecto = {
    Query: {
    Proyectos: async (parent, args) => {
        const proyectos = await ProjectModel.find().populate('lider').populate('avances');
        return proyectos;
    },
    },
    Mutation: {
    crearProyecto: async (parent, args) => {
        const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estadoProyecto: args.estadoProyecto,
        faseProyecto: args.faseProyecto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos
        });
        return proyectoCreado;
    },
    },
};
    
    export { resolversProyecto };