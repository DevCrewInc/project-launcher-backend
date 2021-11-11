import {Schema, model} from 'mongoose';
import {Enum_EstadoProyecto,Enum_FaseProyecto} from "./Enums";


interface Proyecto {
    nombre: string,
    presupuesto: number,
    fechaInicio: Date,
    fechaFin: Date,
    //proyectosLiderados: Proyecto[],
    //inscripciones: Inscripcion[],
    //avancesCreados: Avance[],
    estado: Enum_EstadoProyecto,
    fase: Enum_FaseProyecto,
    lider: string,
};

const projectSchema = new Schema<Proyecto>({
    nombre: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo,
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nulo,
    },
    lider: {
        type: String,
        required: true,
    }


});

const ProjectModel = model("Proyecto", projectSchema);

export {ProjectModel} //PARA GARANTIZAR QUE ASI SE LLAME EN LA BASE DE DATOS