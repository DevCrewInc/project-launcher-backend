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
    ):Token!

    login(
    correo: String!
    contrasena:String!
  ):Token
  }
 
`;
export { tiposAutenticacion };