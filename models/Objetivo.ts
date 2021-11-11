import { Schema, model } from 'mongoose';
import { ProjectModel } from './Proyectos';

import { Enum_TipoObjetivo } from './Enums';


interface Objetivo {
    descripcion: string,
    tipo: Enum_TipoObjetivo,
    proyecto: Schema.Types.ObjectId
}

const ObjetivoSchema = new Schema<Objetivo>({
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true
    }
})

const ObjetivoModel = model('Objetivo', ObjetivoSchema);

export { ObjetivoModel }