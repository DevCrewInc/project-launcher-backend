import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversUsuario } from "../models/usuario/resolvers";
import { resolversAvance } from "../models/avance/resolvers";
import { resolverInscripciones } from "../models/inscripcion/resolvers";

export const resolvers = [resolversUsuario,resolversProyecto,resolversAvance, resolverInscripciones];