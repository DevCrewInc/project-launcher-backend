import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/Enums";
import { UserModel } from '../usuario/Usuarios';

interface Project {
  nombre: string,
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
  presupuesto: number,
  fechaInicio: Date,
  fechaFin: Date,
  lider: Schema.Types.ObjectId,
  estadoProyecto: Enum_EstadoProyecto,
  faseProyecto: Enum_FaseProyecto,

  
  // inscripciones: Inscripcion[],
  // avances: Avance[],
}

const ProjectSchema = new Schema<Project>({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  lider: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  estadoProyecto: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  faseProyecto: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULO,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
      },
    },
  ],
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
}
);

ProjectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

ProjectSchema.virtual('inscripciones', {
  ref: 'Inscription',
  localField: '_id',
  foreignField: 'proyecto',
});





const ProjectModel = model('Project', ProjectSchema);

export { ProjectModel };