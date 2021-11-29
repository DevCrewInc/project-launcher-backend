import { gql } from 'apollo-server-express';

const tiposAvance = gql`
type Avance {
    _id: ID!
    fecha: String!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
}

type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): Avance
}

type Mutation {
    crearAvance(
        descripcion: String!, 
        proyecto: String!, 
        creadoPor: String!
    ): Avance

    editarAvance(
        _id: ID!
        descripcion: String!
    ): Avance

    eliminarAvance(
        _id: ID,
        creadoPor: String
    ): Avance

    crearObservacion(
        _id: String!
        descripcion: String!
    ): Avance

    # editarObservacion(
    #     _id: String!
    #     _id:
    #     descripcion: String!
    # ): Avance
}
`;

export { tiposAvance };