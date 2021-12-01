import { Schema, model } from 'mongoose';
import { ProjectModel } from '../proyecto/Proyectos'
import { UserModel} from '../usuario/Usuarios'


interface Avance {
    fecha: string;
    descripcion: string;
    observaciones: [{ descripcion: String}];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

const avanceSchema = new Schema<Avance>({
fecha: {
    type: String,
    required: true,
},
descripcion: {
    type: String,
    required: true,
},
observaciones: [
    {
        descripcion: {
            type: String,
            required: true,
        },
    }
],

proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
},
creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
},
});

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };