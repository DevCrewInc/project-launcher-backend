import {Schema, model} from 'mongoose';
import {Enum_Rol,Enum_EstadoUsuario,Enum_Facultad,Enum_Semestre} from "../enums/Enums";


interface User {
    correo: string,
    identificacion: string,
    nombre: string,
    apellido: string,
    rol: Enum_Rol,
    estado: Enum_EstadoUsuario,
    //proyectosLiderados: Proyecto[],
    //inscripciones: Inscripcion[],
    //avancesCreados: Avance[],
    facultad: Enum_Facultad,
    semestre: Enum_Semestre,
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
    apellido:{
        type: String,
        required: true
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
        required: true,
        enum: Enum_Facultad
    },
    semestre:{
        type: String,
        required: true,
        enum: Enum_Semestre
    }
})

const UserModel = model("User", UserSchema);

export {UserModel};
