import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
type Inscripcion{
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: String
    fechaEgreso: String
    proyecto: Proyecto!
    estudiante: Usuario!
}

type Query {
    Inscripciones: [Inscripcion]

}

type Mutation {
    crearInscripcion ( 
        proyecto: String!
        estudiante: String!
    ): Inscripcion

    editarEstado(
        _id: ID!
        estado: Enum_EstadoInscripcion!
        proyecto: String!
    ): Inscripcion
}

`
export {tiposInscripcion}