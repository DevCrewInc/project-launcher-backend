import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`
# //   type Token {
# //     token: String
# //     error: String
# //   }
type Mutation {
    registro(
      nombre: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      contrasena: String!
    ): String!
   
  }
`;
export { tiposAutenticacion };