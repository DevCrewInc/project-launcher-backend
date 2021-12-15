import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`
   type Token {
     token: String
     error: String
}


type Mutation {
    registro(
      nombre: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      contrasena: String!
      facultad: Enum_Facultad
      semestre: Enum_Semestre
    ):Token!

    login(
    correo: String!
    contrasena:String!
    
  ):Token!

  # editarContrasena(
  #   _id : String!
  #   contrasena: String!
  # ): Token!

    # editarPerfil(
    #   _id: String!

    # )
  }
 
`;
export { tiposAutenticacion };