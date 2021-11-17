import { gql } from 'apollo-server-express';


const typeDefs = gql`

enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}

enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}

enum Enum_Facultad {
    ARTES 
    CIENCIAS_AGRARIAS 
    CIENCIAS_ECONOMICAS 
    CIENCIAS_EXACTAS_NATURALES 
    CIENCIAS_FARMACEUTICAS_ALIMENTARIAS 
    CIENCIAS_SOCIALES_HUMANAS 
    COMUNICACIONES
    DERECHO_CIENCIAS_POLITICAS 
    EDUCACION 
    ENFERMERIA 
    INGENIERIA 
    MEDICINA 
    ODONTOLOGIA 
    SALUD_PUBLICA
}


enum Enum_Semestre {
    PRIMERO 
    SEGUNDO 
    TERCERO 
    CUARTO 
    QUINTO 
    SEXTO 
    SEPTIMO 
    OCTAVO 
    NOVENO 
    DECIMO 
}

  type Usuario {
    _id: ID!  
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    facultad:  Enum_Facultad!
    semestre: Enum_Semestre!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      facultad: Enum_Facultad!
      semestre: Enum_Semestre!
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

export { typeDefs };