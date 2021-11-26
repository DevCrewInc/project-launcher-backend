import {Schema, model} from 'mongoose';
import {Enum_Rol,Enum_EstadoUsuario,Enum_Facultad,Enum_Semestre} from "../enums/Enums";


interface User {
    correo: string,
    identificacion: string,
    nombre: string,
    rol: Enum_Rol,
    estado: Enum_EstadoUsuario,
    facultad: Enum_Facultad,
    semestre: Enum_Semestre,
    contrasena: string,
    eliminado: boolean
}

const UserSchema = new Schema<User>({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {//comprobar que sea un mail
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                // if(email.includes('@') && email.includes('.')){
                //     return true;
                // } else{
                //     return false;
                // }
            },
            message: 'El formato del email esta incorrecto'
        }
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre:{
            type: String,
            required: true,
        },
  
    rol:{
        type: String,
        required: true,
        enum: Enum_Rol
    },
    estado:{
        type: String,
        required: true,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
    },
    facultad:{
        type: String,
        required: false,
        enum: Enum_Facultad
    },
    semestre:{
        type: String,
        required: false,
        enum: Enum_Semestre
    },
    contrasena:{
        type:String,
        required:true,
    },

    eliminado:{
        type: Boolean,
        default: false,
    }
},
{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
}
);

UserSchema.virtual('proyectosLiderados', {
    ref: 'Project',
    localField: '_id',
    foreignField: 'lider',
});

UserSchema.virtual('inscripciones', {
    ref: 'Inscription',
    localField: '_id',
    foreignField: 'estudiante',
});

UserSchema.virtual('avancesCreados', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'creadoPor',
});

const UserModel = model("User", UserSchema);

export {UserModel};
