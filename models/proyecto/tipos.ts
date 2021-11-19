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
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estadoProyecto: Enum_EstadoProyecto!
    faseProyecto: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
}  

type Query {
    Proyectos: [Proyecto]
}

type Mutation {
    crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estadoProyecto: Enum_EstadoProyecto!
        faseProyecto: Enum_FaseProyecto!
        lider: String!
        objetivos: [crearObjetivo]
): Proyecto

}
`;

export { tiposProyecto };