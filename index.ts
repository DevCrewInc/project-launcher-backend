import * as dotenv from "dotenv";
import * as express from "express";
import conectarBD from "./db/dbconnection";
import { UserModel } from "./models/Usuarios";
import { Enum_Rol } from "./models/Enums";
import { Enum_EstadoUsuario } from "./models/Enums";
import { Enum_Facultad } from "./models/Enums";
import { Enum_Semestre } from "./models/Enums";
import { createJsxClosingElement } from "typescript";
import { ProjectModel } from "./models/project";
import * as Object from "typescript";

const app = express();
conectarBD();

dotenv.config({path: "./.env"})// cargando la variable de entorno del .env par apoder cargar la base de datos


const PORT = 5000;

app.listen(PORT)
console.log("server running on port " + PORT)


const main = async () => {
    await conectarBD();
    //CREAR PROYECTO
    // ProjectModel.create({
    //     nombre: 'Proyecto 1',
    //     presupuesto: 120,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date('2022/11/10'),
    //     lider: "id"
    // });

    //     const proyecto: any = ProjectModel.find({nombre: 'Proyecto 1'});
    //     console.log('el proyecto es: ', proyecto, proyecto.lider);

    //     const lider = await UserModel.find({_id:proyecto[0].lider()});

    //     console.log('el lider del proyecto es: ', lider);
};
    


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

    // //OBTENER UN USUARIO DE LA BASE DE DATOS
    // UserModel.find()
    // .then((u) =>{
    //     console.log("Usuarios: ",u);
    // })
    // .catch((e) => {
    //     console.error("Error obteniendo los usuarios", e);
    // });

    // //EDITAR USUARIO
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

    // //ELIMINAR UN USUARIO
    UserModel.findOneAndDelete({correo:"s@gmail.com"}) //sintaxis de filtros de mongoose
    .then((u) =>{
        console.log ("Usuario eliminado: ", u);
    })
    .catch((e) => {
        console.error("Error eliminando al usuario",e);
    })


main()
