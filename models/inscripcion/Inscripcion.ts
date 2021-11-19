import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "../enums/Enums";

import { UserModel } from '../usuario/Usuarios';
import { ProjectModel } from '../proyecto/Proyectos';


interface Inscripcion {
    proyecto: Schema.Types.ObjectId, //objectid es representado por un string
    estudiante: Schema.Types.ObjectId,
    estado: Enum_EstadoInscripcion,
    fechaIngreso: Date,
    fechaEgreso: Date,
}

const InscripcionSchema = new Schema<Inscripcion>({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    },
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.PENDIENTE,
        required: true
    },
    fechaIngreso: {
        type: Date,
        required: false
    },
    fechaEgreso: {
        type: Date,
        required: false
    }
});

const InscriptionModel = model('Inscription', InscripcionSchema);

export { InscriptionModel }