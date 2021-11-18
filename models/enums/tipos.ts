import { gql } from 'apollo-server-express';


const tiposEnums = gql`

enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}

enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}

enum Enum_Facultad {
    ARTES 
    CIENCIAS_AGRARIAS 
    CIENCIAS_ECONOMICAS 
    CIENCIAS_EXACTAS_NATURALES 
    CIENCIAS_FARMACEUTICAS_ALIMENTARIAS 
    CIENCIAS_SOCIALES_HUMANAS 
    COMUNICACIONES
    DERECHO_CIENCIAS_POLITICAS 
    EDUCACION 
    ENFERMERIA 
    INGENIERIA 
    MEDICINA 
    ODONTOLOGIA 
    SALUD_PUBLICA
}


enum Enum_Semestre {
    PRIMERO 
    SEGUNDO 
    TERCERO 
    CUARTO 
    QUINTO 
    SEXTO 
    SEPTIMO 
    OCTAVO 
    NOVENO 
    DECIMO 
}

enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
}
enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
}
enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
}
`;

export { tiposEnums };