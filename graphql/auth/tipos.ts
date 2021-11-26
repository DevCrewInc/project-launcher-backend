import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`
   type Token {
     token: String
     error: String
}
type Query{
  login(
    correo: String!
    contrasena:String!
  ):Token!
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


  }
 
`;
export { tiposAutenticacion };