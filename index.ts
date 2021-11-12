import * as dotenv from "dotenv";
import * as express from "express";
import conectarBD from "./db/dbconnection";
import { UserModel } from "./models/Usuarios";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/Enums";
import { Enum_EstadoUsuario } from "./models/Enums";
import { Enum_Facultad } from "./models/Enums";
import { Enum_Semestre } from "./models/Enums";
import { createJsxClosingElement } from "typescript";
import * as Object from "typescript";
import { ProjectModel } from "./models/Proyectos";
import { ObjectId } from "mongoose";
import { ObjetivoModel } from "./models/Objetivo";

const
const app = express();
conectarBD();

dotenv.config({path: "./.env"})// cargando la variable de entorno del .env par apoder cargar la base de datos


const PORT = 5000;

app.listen(PORT)
console.log("server running on port " + PORT)

//METODOLOGIA ONE TO MANY
const creacionProjectObjetivos = async() =>{

    //CREAR USUARIO
    const usuarioInicial = await UserModel.create({
        correo: 's@gmail.com',
        identificacion: '34565',
        nombre: 'Jorge',
        apellido: 'Lopez',
        rol: Enum_Rol.estudiante,
        estado: Enum_EstadoUsuario.autorizado,
        facultad: Enum_Facultad.ingenieria,
        semestre: Enum_Semestre.tercero,
});
// CREAR PROYECTO
const proyectoCreado = await ProjectModel.create({
    nombre: 'Project-Launcher',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
});
    // CREAR OBJETIVO EN LA BASE DE DATOS
    const objetivoGeneral = await ObjetivoModel.create({
        descripcion: "Primer objetivo general",
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });

    const objetivoEspecifico1 = await ObjetivoModel.create({
        descripcion: "Primer objetivo especifico1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });

    const objetivoEspecifico2 = await ObjetivoModel.create({
        descripcion: "Primer objetivo especifico2",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
};

const main = async () => {
    await conectarBD();

    const proyecto = await ProjectModel.findOne({_id: '618da911c32832ea394082f9'})
    console.log('El proyecto encontrado es: ', proyecto)

    //CONSULTAR OBJETIVOS BASE DE DATOS
    const objetivos = await ObjetivoModel.find({project: '618da911c32832ea394082f9'})
    console.log('los objetivos del proyecto son: ', objetivos);

    const proyectoConObjetivos = {...proyecto, objetivos: objetivos};
    console.log('El proyecto con objetivos es: ', proyectoConObjetivos)

//CREAR UN USUARIO
// UserModel.create({
//     correo: 'l@gmail.com',
//     identificacion: '12345',
//     nombre: 'Carlos',
//     apellido: 'Pérez',
//     rol: Enum_Rol.administrador,
//     estado: Enum_EstadoUsuario.autorizado,
//     facultad: Enum_Facultad.artes,
//     semestre: Enum_Semestre.cuarto,
// })
// .then((u) => {
//     console.log("Usuario creado",u);
// })
// .catch((e) => {
//     console.error("Error creando el usuario",e);
// });

// CONSULTAR USUARIO 
// UserModel.find()
// .then((u) =>{
//     console.log("Usuarios: ",u);
// })
// .catch((e) => {
//     console.error("Error obteniendo los usuarios", e);
// });

//EDITAR USUARIO
// UserModel.findByIdAndUpdate(
//     { correo: "j@gmail.com"},
//     {
//         nombre: "Juan",
//         apellido: "López",
//     }
// ).then((u) => {
//     console.log("Usuario actualizado: ", u);
// }).catch((e) =>{
//     console.error("Error al editar el usuario")
// })

//ELIMINAR USUARIO
// UserModel.findOneAndDelete({correo:"s@gmail.com"}) //sintaxis de filtros de mongoose
// .then((u) =>{
//     console.log ("Usuario eliminado: ", u);
// })
// .catch((e) => {
//     console.error("Error eliminando al usuario",e);
// })
}
main();