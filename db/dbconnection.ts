import * as dotenv from "dotenv";
import { connect } from 'mongoose';

dotenv.config({path: "./.env"})// cargando la variable de entorno del .env par apoder cargar la base de datos

const connectionString = process.env.DATABASE_CONNECTION_STRING; //me traigo la variable del env

const conectarBD = async () => {
return await connect(connectionString)

.then(() => {
    console.log('Conexion exitosa');
})
.catch((e) => {
    console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;