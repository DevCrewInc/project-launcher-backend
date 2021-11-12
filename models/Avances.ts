import { Schema, model } from 'mongoose';

import { UserModel } from './Usuarios';
import { ProjectModel } from './Proyectos';


interface Avance {
    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones: string,
    creadoPor: Schema.Types.ObjectId
}

const AvanceSchema = new Schema<Avance>({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    observaciones: {
        type: String
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    }

});

const AvanceModel = model('Avance', AvanceSchema);

export { AvanceModel }