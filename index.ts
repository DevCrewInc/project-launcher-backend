import * as dotenv from "dotenv";
import * as express from "express";
import conectarBD from "./db/dbconnection";


const app = express();
conectarBD();

dotenv.config({path: "./.env"})// cargando la variable de entorno del .env par apoder cargar la base de datos


const PORT = 5000;

app.listen(PORT)
console.log("server running on port " + PORT)