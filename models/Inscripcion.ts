import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from "./Enums";

import { UserModel } from './Usuarios';
import { ProjectModel } from './Proyectos';


interface Inscripcion {
    proyecto: Schema.Types.ObjectId,
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
        default: Enum_EstadoInscripcion.rechazada
    },
    fechaIngreso: {
        type: Date,
        required: true
    },
    fechaEgreso: {
        type: Date,
        required: true
    }
});

const InscripcionModel = model('Inscripcion', InscripcionSchema);

export { InscripcionModel }