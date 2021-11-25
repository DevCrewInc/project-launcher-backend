import { gql } from 'apollo-server-express';
// los tipos validan la info y generan la estructura de la coleccion

const tiposUsuario = gql`


type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    facultad: Enum_Facultad!
    semestre: Enum_Semestre!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    proyectosLiderados: [Proyecto]
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
}


type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    SolicitudesNuevosUsuarios: [Usuario]

}


type Mutation {
    crearUsuario(
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    facultad: Enum_Facultad
    semestre: Enum_Semestre
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
    _id: String!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    facultad: Enum_Facultad!
    semestre: Enum_Semestre!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario

   
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
    
    }
`;

export { tiposUsuario };