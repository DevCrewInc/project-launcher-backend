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
}
main()
