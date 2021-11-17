enum Enum_Rol {
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR"
}

enum Enum_EstadoUsuario {
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO',
}

enum Enum_Facultad {
    ARTES = "ARTES",
    CIENCIAS_AGRARIAS = "CIENCIAS AGRARIAS",
    CIENCIAS_ECONOMICAS = "CIENCIAS ECONOMICAS",
    CIENCIAS_EXACTAS_NATURALES = "CIENCIAS EXACTAS NATURALES",
    CIENCIAS_FARMACEUTICAS_ALIMENTARIAS = "CIENCIAS FARMACEUTICAS ALIMENTARIAS",
    CIENCIAS_SOCIALES_HUMANAS = "CIENCIAS SOCIALES HUMANAS",
    COMUNICACIONES = "COMUNICACIONES",
    DERECHO_CIENCIAS_POLITICAS = "DERECHO CIENCIAS POLITICAS",
    EDUCACION = "EDUCACION",
    ENFERMERIA = "ENFERMERIA",
    INGENIERIA = "INGENIERIA",
    MEDICINA = "MEDICINA",
    ODONTOLOGIA = "ODONTOLOGIA",
    SALUD_PUBLICA = "SALUD PUBLICA"
}


enum Enum_Semestre {
    PRIMERO = "PRIMERO",
    SEGUNDO = "SEGUNDO",
    TERCERO = "TERCERO ",
    CUARTO = "CUARTO",
    QUINTO = "QUINTO",
    SEXTO = "SEXTO",
    SEPTIMO = "SEPTIMO",
    OCTAVO = "OCTAVO",
    NOVENO = "NOVENO",
    DECIMO = "DECIMO",
}

enum Enum_EstadoProyecto {
    activo = "Activo",
    inactivo = "Inactivo",
}

enum Enum_FaseProyecto {
    iniciado = "Iniciado",
    desarrollo = "Desarrollo",
    terminado = "Terminado",
    nulo = '',
}

enum Enum_TipoObjetivo {
    general = "General",
    especifico = "Especifico"
}

enum Enum_EstadoInscripcion {
    aceptada = "Aceptada",
    rechazada = "Rechazada"
}


export { Enum_Rol, Enum_EstadoUsuario, Enum_Facultad, Enum_Semestre, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoInscripcion, Enum_TipoObjetivo }