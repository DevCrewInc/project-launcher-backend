import { gql } from 'apollo-server-express';
// los tipos validan la info y generan la estructura de la coleccion

const tiposUsuario = gql`


type Usuario {
    _id: ID!
    nombre: String!
    identificacion: String!
    correo: String!
    facultad: Enum_Facultad
    semestre: Enum_Semestre
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    proyectosLiderados: [Proyecto]
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    celular:String
    aboutMe:String
    contrasena:String
    
}


type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    UsuarioInfo(_id: String!): Usuario
    Estudiantes:[Usuario]
    SolicitudesNuevosUsuarios: [Usuario]
    SolicitudesNuevosEstudiantes:[Usuario]

}


type Mutation {
    crearUsuario(
    nombre: String!
    identificacion: String!
    correo: String!
    facultad: Enum_Facultad
    semestre: Enum_Semestre
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
        _id:String!
        celular:String
        aboutMe : String
    ): Usuario
    
    editarContrasena(
        _id:String!
        contrasena:String!
        contrasenaNueva: String!
    ): Boolean
    

    editarEstadoUsuario(
    _id: String!
    estado: Enum_EstadoUsuario!
    ): Usuario



    eliminarUsuario(_id: String): Usuario
    
    }
`;

export { tiposUsuario };