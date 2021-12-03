import { gql } from 'apollo-server-express';


const tiposProyecto = gql`

type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}

input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}

type Proyecto {
   _id : ID!
    nombre: String!
    presupuesto: Float!
    descripcionProyecto: String
    fechaEstimada: String
    fechaInicio: String
    fechaFin: String
    estadoProyecto: Enum_EstadoProyecto!
    faseProyecto: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
}  

type Query {
    ListaProyectosAdmin: [Proyecto]
    ListaProyectosEstudiante    : [Proyecto]
    ProyectosEstudiante (_id: String!): [Proyecto]
    ProyectosLider (_id: String!): [Proyecto]
    SolicitudesNuevosProyectos: [Proyecto]
    
}

type Mutation {
    crearProyecto(
        nombre: String!
        presupuesto: Float!
        descripcionProyecto: String!
        fechaEstimada: String!
        lider: String!
        objetivos: [crearObjetivo]

): Proyecto

    eliminarProyecto(_id:String!) : Proyecto


    editarProyectoLider(
        _id: String!
        nombre: String!
        presupuesto: Float!
        objetivos: [crearObjetivo]!

    ): Proyecto

    editarEstadoProyecto(
        _id:String!
        estadoProyecto:Enum_EstadoProyecto!
        faseProyecto:Enum_FaseProyecto!
    ): Proyecto


    crearObjetivo(
        IdProyecto: String!
        campos:crearObjetivo!
    ): Proyecto

    editarObjetivo(
        IdProyecto: String!
        indexObjetivo:Int!
        campos:crearObjetivo!
    ): Proyecto

    eliminarObjetivo(IdProyecto: String!, idObjetivo: String!): Proyecto


}

`;

export { tiposProyecto };