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
    ProyectosNoInscritos(estudiante:String):[Inscripcion]

}

type Mutation {
    crearInscripcion ( 
        proyecto: String!
        estudiante: String!
    ): Inscripcion

    editarEstadoInscripcion(
        _id: ID!
        estado: Enum_EstadoInscripcion!
    ): Inscripcion
    eliminarInscripcion(_id:String!):Inscripcion

    
}

`
export {tiposInscripcion}