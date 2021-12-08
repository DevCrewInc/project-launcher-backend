import { gql } from 'apollo-server-express';

const tiposAvance = gql`

type Observaciones {
    _id: ID!
    descripcion: String!
}



type Avance {
    _id: ID!
    fecha: String!
    tituloAvance: String!
    descripcion: String!
    observaciones: String
    proyecto: Proyecto!
    creadoPor: Usuario!
}

type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): Avance
}

type Mutation {
    crearAvance(
        tituloAvance:String!,
        descripcion: String!, 
        proyecto: String!, 
        creadoPor: String!
    ): Avance

    editarAvance(
        _id: ID!
        tituloAvance:String!
        descripcion: String!
    ): Avance

    eliminarAvance(
        _id: ID,
        creadoPor: String
    ): Avance

    crearObservacion(
        IdAvance: String!
        observaciones: String!
    ): Avance

    editarObservacion(
        IdAvance: String!
        observaciones: String!
    ): Avance

    eliminarObservacion(
        IdAvance: String!
        observaciones: String!
    ): Avance

}
`;

export { tiposAvance };