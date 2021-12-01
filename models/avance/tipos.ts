import { gql } from 'apollo-server-express';

const tiposAvance = gql`

type Observaciones {
    _id: ID!
    descripcion: String!
}

input comentarioObservacion {
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
        campos: comentarioObservacion!
    ): Avance

    editarObservacion(
        IdAvance: String!
        indexObservacion:Int!
        # IdObservacion: String!
        campos: comentarioObservacion!
    ): Avance

    eliminarObservacion(
        IdAvance: String!
        IdObservacion: String!
    ): Avance

}
`;

export { tiposAvance };