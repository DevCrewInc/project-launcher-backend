import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';
import { tiposInscripcion } from '../models/inscripcion/tipos';
import {tiposAutenticacion} from './auth/tipos'



const tiposGlobales = gql`
scalar Date
`;

export const tipos=[tiposGlobales,tiposEnums,tiposUsuario, tiposProyecto, tiposAvance, tiposInscripcion, tiposAutenticacion] ;