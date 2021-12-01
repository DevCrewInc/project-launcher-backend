import { gql } from 'apollo-server-express';

const tiposAvance = gql`

type Observaciones {
    _id: ID!
    descripcion: String!
}

input crearObservacion {
    descripcion: String!
}

type Avance {
    _id: ID!
    fecha: String!
    descripcion: String!
    observaciones: [Observaciones]
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
        IdAvance: String!
        campos: crearObservacion!
    ): Avance

    # editarObservacion(
    #     _id: String!
    #     _id:
    #     descripcion: String!
    # ): Avance
}
`;

export { tiposAvance };