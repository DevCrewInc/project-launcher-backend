enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Líder",
    administrador = "Administrador"
}

enum Enum_EstadoUsuario {
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No autorizado"
}

enum Enum_Facultad {
    artes = "Artes",
    ciencias_agrarias = "Ciencias Agrarias",
    ciencias_economicas = "Ciencias Económicas",
    ciencias_exactas_naturales = "Ciencias Exactas Naturales",
    ciencias_farmaceuticas_alimentarias = "Ciencias Farmacéuticas Alimentarias",
    ciencias_sociales_humanas = "Ciencias Sociales Humanas",
    comunicaciones = "Comunicaciones",
    derecho_ciencias_politicas = "Derecho Ciencias Políticas",
    educacion = "Educación",
    enfermeria = "Enfermería",
    ingenieria = "Ingeniería",
    medicina = "Medicina",
    odontologia = "Odontología",
    salud_publica = "Salud Pública"
}

enum Enum_Semestre {
    primero = "1",
    segundo = "2",
    tercero = "3",
    cuarto = "4",
    quinto = "5",
    sexto = "6",
    septimo = "7",
    octavo = "8",
    noveno = "9",
    decimo = "10",
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