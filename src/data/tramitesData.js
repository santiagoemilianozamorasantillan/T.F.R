// 1. OBJETO DE CATEGORÍAS
export const categoriesData = {
  "documentos-identidad": {
    title: "Documentos de Identidad",
    description: "Trámites relacionados con tu INE, Pasaporte o Certificados Oficiales.",
    tramites: [
      { id: "acta-de-nacimiento", title: "Acta de Nacimiento (Copia Certificada)", time: "10 min", difficulty: "Fácil" },
      { id: "cambio-domicilio-ine", title: "Cambio de Domicilio del INE", time: "45 min", difficulty: "Medio" },
      { id: "curp-consulta-impresion", title: "CURP (Consulta e Impresión)", time: "5 min", difficulty: "Fácil" },
      { id: "pasaporte-agendado-cita", title: "Pasaporte (Agendado de Cita)", time: "20 min", difficulty: "Medio" }
    ]
  },
  "tramites-fiscales": {
    title: "Trámites Fiscales (SAT)",
    description: "Gestiona tu situación fiscal, citas, contraseñas y declaraciones ante el SAT.",
    tramites: [
      { id: "cita-sat", title: "Cita del SAT", time: "15 min", difficulty: "Medio" },
      { id: "firma-electronica", title: "Firma Electrónica (e.firma)", time: "30 min", difficulty: "Avanzado" },
      { id: "declaracion-anual", title: "Declaración Anual", time: "40 min", difficulty: "Avanzado" },
      { id: "creacion-contrasena-sat", title: "Creación de Contraseña del SAT", time: "20 min", difficulty: "Medio" }
    ]
  },
  "salud-seguridad-social": {
    title: "Salud y Seguridad Social (IMSS)",
    description: "Accede a servicios médicos, semanas cotizadas e incapacidades del IMSS.",
    tramites: [
      { id: "pension-cesantia-vejez-imss", title: "Trámite de Pensión (IMSS)", time: "60 min", difficulty: "Avanzado" },
      { id: "incapacidad-medica-imss", title: "Incapacidad Médica (IMSS)", time: "45 min", difficulty: "Medio" },
      { id: "alta-imss-asignacion-nss", title: "Alta en el IMSS (Asignación NSS)", time: "10 min", difficulty: "Fácil" },
      { id: "consulta-semanas-cotizadas", title: "Consulta de Semanas Cotizadas", time: "10 min", difficulty: "Fácil" },
      { id: "cita-medica-imss", title: "Cita Médica IMSS", time: "10 min", difficulty: "Fácil" },
      { id: "surtido-medicamentos-resurtible", title: "Surtido de Medicamentos", time: "20 min", difficulty: "Fácil" },
      { id: "correccion-datos-imss", title: "Corrección de Datos (IMSS)", time: "30 min", difficulty: "Medio" },
      { id: "vigencia-de-derechos", title: "Vigencia de Derechos", time: "5 min", difficulty: "Fácil" }
    ]
  },
  "vivienda-patrimonio": {
    title: "Vivienda y Patrimonio",
    description: "Regulariza tus escrituras o solicita tu crédito hipotecario Infonavit.",
    tramites: [
      { id: "regularizacion-escrituras", title: "Regularización de Escrituras", time: "60 min", difficulty: "Avanzado" },
      { id: "herencia-vivienda", title: "Herencia de Vivienda", time: "90 min", difficulty: "Avanzado" },
      { id: "compra-vivienda", title: "Compra de Vivienda", time: "60 min", difficulty: "Avanzado" },
      { id: "credito-infonavit", title: "Crédito INFONAVIT", time: "45 min", difficulty: "Avanzado" }
    ]
  },
  "viajes-migracion": {
    title: "Viajes y Migración",
    description: "Requisitos de control internacional, visas y pases de abordar.",
    tramites: [
      { id: "pasaporte-uso", title: "Pasaporte (Trámites de Viaje)", time: "15 min", difficulty: "Fácil" },
      { id: "visa-turista", title: "Visa de Turista", time: "50 min", difficulty: "Avanzado" },
      { id: "documentacion-digital", title: "Documentación Digital (Permisos)", time: "20 min", difficulty: "Medio" },
      { id: "check-in-aerolinea", title: "Uso de App de Aerolínea (Check-in)", time: "10 min", difficulty: "Fácil" }
    ]
  },
  "programas-sociales": {
    title: "Programas Sociales y Becas",
    description: "Inscríbete a los apoyos económicos y pensiones del Gobierno de México.",
    tramites: [
      { id: "beca-benito-juarez", title: "Beca Benito Juárez", time: "30 min", difficulty: "Medio" },
      { id: "pension-bienestar-adultos", title: "Pensión Bienestar (Adultos Mayores)", time: "30 min", difficulty: "Medio" },
      { id: "jovenes-construyendo-futuro", title: "Jóvenes Construyendo el Futuro", time: "35 min", difficulty: "Medio" }
    ]
  }
};

// 2. DETALLE PASO A PASO
export const tramitesDetailData = {
  "acta-de-nacimiento": {
    title: "ACTA DE NACIMIENTO (COPIA CERTIFICADA EN LÍNEA)",
    description: "Obtén una copia certificada oficial de tu acta de nacimiento con validez legal ante cualquier autoridad.",
    time: "10 min",
    difficulty: "Fácil",
    pasos: [
      "Ingresar al portal oficial del Gobierno de México (sección Actas de Nacimiento).",
      "Ingresar la CURP o los datos personales.",
      "Validar los datos de los padres.",
      "Realizar el pago de derechos en línea o generar formato de pago.",
      "Descargar el archivo PDF e imprimirlo."
    ],
    requisitos: [
      "Clave Única de Registro de Población (CURP)",
      "Datos personales (nombre completo, fecha de nacimiento, entidad de registro, nombres de los padres)",
      "Tarjeta de crédito/débito para pago"
    ]
  },
  "cambio-domicilio-ine": {
    title: "CAMBIO DE DOMICILIO DEL INE",
    description: "Actualiza tu dirección en el Padrón Electoral para mantener tu credencial para votar vigente.",
    time: "45 min",
    difficulty: "Medio",
    pasos: [
      "Agendar una cita en el portal web del INE.",
      "Acudir al Módulo de Atención Ciudadana seleccionado el día de la cita con los documentos originals.",
      "Confirmar los datos en el sistema y capturar fotografía y huellas.",
      "Recoger la nueva credencial en la fecha indicada con el comprobante del trámite."
    ],
    requisitos: [
      "Documento de identidad (acta de nacimiento)",
      "Identificación con fotografía (credencial actual)",
      "Comprobante de domicilio reciente (no mayor a 3 meses)"
    ]
  },
  "curp-consulta-impresion": {
    title: "CURP (CONSULTA E IMPRESIÓN)",
    description: "Consulta, descarga e imprime la constancia de tu Clave Única de Registro de Población de forma gratuita.",
    time: "5 min",
    difficulty: "Fácil",
    pasos: [
      "Ingresar a la página oficial de consulta de CURP.",
      "Seleccionar la pestaña 'Búsqueda por CURP' o 'Datos Personales'.",
      "Completar el formulario y resolver el captcha.",
      "Descargar el documento PDF gratuito."
    ],
    requisitos: [
      "Conocer la CURP o tener a la mano los datos personales básicos."
    ]
  },
  "pasaporte-agendado-cita": {
    title: "PASAPORTE (AGENDADO DE CITA)",
    description: "Programa tu cita presencial ante la Secretaría de Relaciones Exteriores para tramitar o renovar tu pasaporte.",
    time: "20 min",
    difficulty: "Medio",
    pasos: [
      "Crear una cuenta en el portal de Citas de la SRE.",
      "Programar la cita en la delegación más cercana.",
      "Realizar el pago de derechos en ventanilla bancaria con el formato generado.",
      "Acudir a la cita con los documentos originales para toma de biométricos."
    ],
    requisitos: [
      "Copia certificada del acta de nacimiento",
      "Identificación oficial vigente",
      "CURP certificada",
      "Comprobante de pago de derechos."
    ]
  },
  "cita-sat": {
    title: "CITA DEL SAT",
    description: "Reserva un espacio de atención presencial en los módulos del Servicio de Administración Tributaria.",
    time: "15 min",
    difficulty: "Medio",
    pasos: [
      "Ingresar al portal Citas SAT.",
      "Seleccionar \"Registrar cita\" y elegir el trámite deseado.",
      "Elegir la oficina, fecha y hora disponible (o formarse en la Fila Virtual).",
      "Guardar y confirmar el acuse de cita enviado al correo."
    ],
    requisitos: [
      "RFC",
      "CURP",
      "Un correo electrónico personal."
    ]
  },
  "firma-electronica": {
    title: "FIRMA ELECTRÓNICA (E.FIRMA)",
    description: "Obtén tu conjunto de archivos digitales seguros para firmar documentos y trámites fiscales.",
    time: "30 min",
    difficulty: "Avanzado",
    pasos: [
      "Agendar cita en el SAT para \"e.firma Personas Físicas\".",
      "Acudir a la oficina del SAT con los requisitos y la USB.",
      "Realizar el registro de biométricos (huellas, iris, firma autógrafa).",
      "Recibir los archivos .cer y .key en la memoria USB."
    ],
    requisitos: [
      "Cita en el SAT",
      "Identificación oficial",
      "CURP",
      "Comprobante de domicilio",
      "Memoria USB."
    ]
  },
  "declaracion-anual": {
    title: "DECLARACIÓN ANUAL",
    description: "Reporta tus ingresos y deducciones del año fiscal ante el SAT para calcular tu saldo a favor o en contra.",
    time: "40 min",
    difficulty: "Avanzado",
    pasos: [
      "Ingresar al portal del SAT en el mes de abril (Personas Físicas).",
      "Iniciar sesión y revisar la información prellenada.",
      "Agregar o validar las deducciones personales.",
      "Enviar la declaración y guardar el acuse de recibo."
    ],
    requisitos: [
      "RFC a 13 posiciones",
      "Contraseña o e.firma vigente",
      "CLABE interbancaria (en caso de saldo a favor)",
      "Facturas de deducciones personales."
    ]
  },
  "creacion-contrasena-sat": {
    title: "CREACIÓN DE CONTRASEÑA DEL SAT",
    description: "Genera o restablece tu clave de acceso a los servicios digitales del SAT mediante validación de video.",
    time: "20 min",
    difficulty: "Medio",
    pasos: [
      "Descargar la app SAT ID o ingresar al portal web de SAT ID.",
      "Seleccionar \"Generar contraseña\".",
      "Grabar un video pronunciando la frase solicitada para validación de identidad.",
      "Firmar la solicitud en pantalla y esperar la respuesta en un máximo de 5 días hábiles."
    ],
    requisitos: [
      "Identificación oficial",
      "RFC",
      "Correo electrónico",
      "Teléfono celular."
    ]
  },
  "pension-cesantia-vejez-imss": {
    title: "TRÁMITE DE PENSIÓN (CESANTÍA O VEJEZ - IMSS)",
    description: "Inicia tu solicitud de retiro laboral por edad avanzada o semanas cotizadas ante el IMSS.",
    time: "60 min",
    difficulty: "Avanzado",
    pasos: [
      "Acudir a la ventanilla de Prestaciones Económicas de tu Unidad de Medicina Familiar (UMF).",
      "Entregar la documentación para el cálculo de pensión.",
      "Firmar la Solicitud de Pensión y la Resolución.",
      "Tramitar el retiro de saldo en la AFORE correspondiente."
    ],
    requisitos: [
      "Cumplir con las semanas cotizadas (Ley 73 o 97)",
      "Identificación oficial",
      "Estado de cuenta AFORE",
      "Estado de cuenta bancario con CLABE."
    ]
  },
  "incapacidad-medica-imss": {
    title: "INCAPACIDAD MÉDICA (IMSS)",
    description: "Obtén el certificado médico que justifica tu audiencia laboral y activa tu subsidio económico.",
    time: "45 min",
    difficulty: "Medio",
    pasos: [
      "Acudir a consulta en la UMF o área de urgencias.",
      "El médico tratante evaluará y emitirá el certificado de incapacidad.",
      "Entregar (o enviar digitalmente) la copia patronal a tu empleador.",
      "Si corresponde pago, registrar la cuenta CLABE en el portal IMSS para recibir el subsidio."
    ],
    requisitos: [
      "Identificación oficial",
      "Cartilla Nacional de Salud",
      "Estar vigente en el IMSS."
    ]
  },
  "alta-imss-asignacion-nss": {
    title: "ALTA EN EL IMSS (ASIGNACIÓN DE NSS)",
    description: "Obtén por primera vez tu Número de Seguridad Social para incorporarte al esquema de salud laboral.",
    time: "10 min",
    difficulty: "Fácil",
    pasos: [
      "Ingresar al portal \"Asignación o Localización de NSS\" del IMSS.",
      "Llenar el formulario con CURP y correo.",
      "Descargar el documento con el NSS y la tarjeta correspondiente.",
      "Entregar el número al empleador para que realice el alta patronal."
    ],
    requisitos: [
      "CURP",
      "Correo electrónico personal",
      "Acta de nacimiento."
    ]
  },
  "consulta-semanas-cotizadas": {
    title: "CONSULTA DE SEMANAS COTIZADAS",
    description: "Descarga el reporte detallado de los días cotizados y salarios registrados ante el IMSS por tus patrones.",
    time: "10 min",
    difficulty: "Fácil",
    pasos: [
      "Ingresar al portal del IMSS (sección \"Semanas Cotizadas\").",
      "Capturar los datos solicitados y el captcha.",
      "Seleccionar si se desea el reporte con historial detallado de salarios.",
      "Recibir y descargar el archivo PDF en el correo electrónico."
    ],
    requisitos: [
      "CURP",
      "NSS (Número de Seguridad Social)",
      "Correo electrónico."
    ]
  },
  "cita-medica-imss": {
    title: "CITA MÉDICA IMSS",
    description: "Agenda de forma remota tu consulta médica familiar sin necesidad de hacer filas desde temprano.",
    time: "10 min",
    difficulty: "Fácil",
    pasos: [
      "Descargar la aplicación \"IMSS Digital\" o ingresar al portal web.",
      "Seleccionar \"Cita Medicina Familiar\".",
      "Ingresar NSS, CURP y correo.",
      "Seleccionar la fecha y horario disponible en tu consultorio y confirmar."
    ],
    requisitos: [
      "CURP",
      "NSS",
      "Correo electrónico",
      "Estar vigente en sus derechos."
    ]
  },
  "surtido-medicamentos-resurtible": {
    title: "SURTIDO DE MEDICAMENTOS (RECETA RESURTIBLE)",
    description: "Surtido automático de medicamentos para padecimientos crónicos estables por hasta 3 meses.",
    time: "20 min",
    difficulty: "Fácil",
    pasos: [
      "Acudir a la consulta inicial para obtener los 3 folios de receta resurtible.",
      "Surtir la primera receta en farmacia el día de la consulta.",
      "Volver a la farmacia en los días exactos marcados en las recetas 2 y 3.",
      "Entregar la receta en ventanilla junto con el carnet de salud."
    ],
    requisitos: [
      "Estar integrado al programa de receta resurtible por el médico familiar",
      "Carnet de citas",
      "Receta impresa."
    ]
  },
  "correccion-datos-imss": {
    title: "CORRECCIÓN DE DATOS (IMSS)",
    description: "Corrige duplicidades o errores en tu nombre, fecha de nacimiento o NSS ante el IMSS.",
    time: "30 min",
    difficulty: "Medio",
    pasos: [
      "Ingresar al portal de Escritorio Virtual del IMSS o acudir a la Subdelegación.",
      "Llenar la solicitud de \"Regularización y/o Corrección de datos personales\".",
      "Anexar los documentos probatorios.",
      "Recibir el formato de certificación de regularización."
    ],
    requisitos: [
      "Acta de nacimiento",
      "Identificación oficial",
      "CURP certificada",
      "Documento expedido por el IMSS con el NSS a corregir."
    ]
  },
  "vigencia-de-derechos": {
    title: "VIGENCIA DE DERECHOS",
    description: "Genera tu constancia para verificar si tú o tus beneficiarios tienen derecho a recibir servicios médicos.",
    time: "5 min",
    difficulty: "Fácil",
    pasos: [
      "Entrar al portal de servicios digitales del IMSS.",
      "Seleccionar \"Consulta si están vigentes tus derechos\".",
      "Introducir los datos requeridos.",
      "Descargar el documento PDF (\"Constancia de Vigencia de Derechos\")."
    ],
    requisitos: [
      "CURP",
      "NSS",
      "Correo electrónico."
    ]
  },
  "regularizacion-escrituras": {
    title: "REGULARIZACIÓN DE ESCRITURAS",
    description: "Inicia los trámites legales y notariales para formalizar la propiedad legal de tu inmueble.",
    time: "60 min",
    difficulty: "Avanzado",
    pasos: [
      "Acudir a la dependencia de regularización territorial o Notaría.",
      "Entregar el expediente para revisión técnica y jurídica.",
      "Pagar los derechos o aranceles notariales (con descuento si aplica jornada).",
      "Firmar la escritura pública y esperar la inscripción en el Registro Público de la Propiedad."
    ],
    requisitos: [
      "Contrato de compraventa o cesión de derechos",
      "Comprobantes de pago de predial y agua",
      "Identificación oficial",
      "Croquis de ubicación."
    ]
  },
  "herencia-vivienda": {
    title: "HERENCIA DE VIVIENDA (SUCESIÓN TESTAMENTARIA)",
    description: "Transfiere los derechos de propiedad de un inmueble tras el fallecimiento del propietario original según testamento.",
    time: "90 min",
    difficulty: "Avanzado",
    pasos: [
      "Los herederos deben acudir con un Notario Público.",
      "Iniciar el trámite de Radicación de la Sucesión.",
      "Realizar los avisos legales y la lectura del testamento.",
      "Proceder con la adjudicación de bienes y emitir las nuevas escrituras."
    ],
    requisitos: [
      "Acta de defunción",
      "Testamento original",
      "Actas de nacimiento de los herederos",
      "Escrituras del inmueble."
    ]
  },
  "compra-vivienda": {
    title: "COMPRA DE VIVIENDA",
    description: "Guía jurídica e inscripción formal de un inmueble ante notario público al adquirir una casa.",
    time: "60 min",
    difficulty: "Avanzado",
    pasos: [
      "Firmar contrato de promesa de compraventa y dar un enganche.",
      "Elegir un Notario Público para que realice el avalúo y revise la situación jurídica del inmueble.",
      "Realizar el pago total o la firma del crédito hipotecario.",
      "Firmar las escrituras definitivas ante el Notario."
    ],
    requisitos: [
      "Identificaciones vigentes de comprador y vendedor",
      "Escrituras previas",
      "Libertad de gravamen",
      "Comprobante de pago de impuestos."
    ]
  },
  "credito-infonavit": {
    title: "CRÉDITO INFONAVIT",
    description: "Inicia la solicitud de tu crédito hipotecario utilizando tu subcuenta de vivienda INFONAVIT.",
    time: "45 min",
    difficulty: "Avanzado",
    pasos: [
      "Ingresar a \"Mi Cuenta Infonavit\" y realizar la precalificación.",
      "Realizar el curso gratuito \"Saber más para decidir mejor\".",
      "Integrar el expediente y solicitar el crédito en una oficina del INFONAVIT.",
      "Elegir Notario, firmar escrituras y recibir el aviso de retención para el empleador."
    ],
    requisitos: [
      "Ser derechohabiente activo",
      "Contar con los puntos mínimos requeridos (1080 puntos)",
      "Precalificación",
      "Avalúo de la vivienda."
    ]
  },
  "pasaporte-uso": {
    title: "PASAPORTE (TRÁMITES DE VIAJE)",
    description: "Requisitos de control internacional y renovación de tu pasaporte para viajes internacionales.",
    time: "15 min",
    difficulty: "Fácil",
    pasos: [
      "Verificar fecha de expiración antes de planear el viaje.",
      "En caso de renovación, presentar el pasaporte anterior y pagar los derechos correspondientes en la SRE."
    ],
    requisitos: [
      "Pasaporte con al menos 6 meses de vigencia restantes",
      "Hojas en blanco para sellos."
    ]
  },
  "visa-turista": {
    title: "VISA (TURISTA EJEMPLO EE.UU.)",
    description: "Proceso de solicitud, pago y entrevista consular para obtener un visado de turismo extranjero.",
    time: "50 min",
    difficulty: "Avanzado",
    pasos: [
      "Llenar el formulario oficial en línea del país destino.",
      "Pagar la tarifa correspondiente (MRV).",
      "Agendar cita(s) para toma de huellas/fotos (CAS) y entrevista consular.",
      "Acudir a la entrevista con comprobantes de arraigo (empleo, escuela, finanzas)."
    ],
    requisitos: [
      "Pasaporte vigente",
      "Formulario de solicitud (DS-160)",
      "Pago de la cuota de solicitud",
      "Fotografía reciente."
    ]
  },
  "documentacion-digital": {
    title: "DOCUMENTACIÓN DIGITAL",
    description: "Tramita los permisos migratorios electrónicos y declaraciones digitales obligatorias para tu viaje.",
    time: "20 min",
    difficulty: "Medio",
    pasos: [
      "Ingresar al portal oficial del gobierno del país destino (ej. ETIAS para Europa, ESTA para EE.UU., o formas de aduana).",
      "Llenar los datos de salud y de vuelo.",
      "Pagar el costo del trámite si aplica.",
      "Descargar el código QR o PDF en el celular para mostrar en el aeropuerto."
    ],
    requisitos: [
      "Pasaporte",
      "Boleto de avión",
      "Detalles del alojamiento."
    ]
  },
  "check-in-aerolinea": {
    title: "USO DE APP DE AEROLÍNEA (CHECK-IN)",
    description: "Realiza tu registro de vuelo en línea para obtener tu pase de abordar digital y evitar filas en aeropuerto.",
    time: "10 min",
    difficulty: "Fácil",
    pasos: [
      "Descargar la aplicación de la aerolínea correspondiente.",
      "Seleccionar la opción de Check-in entre 24 y 72 horas antes del vuelo.",
      "Ingresar la clave de reserva y confirmar los asientos.",
      "Guardar el pase de abordar en la \"Wallet\" del teléfono."
    ],
    requisitos: [
      "Clave de reservación (PNR)",
      "Apellidos del pasajero",
      "Smartphone."
    ]
  },
  "beca-benito-juarez": {
    title: "BECA INSTITUCIONAL (BECAS BENITO JUÁREZ)",
    description: "Solicita la incorporación al programa de apoyo económico para estudiantes de instituciones públicas.",
    time: "30 min",
    difficulty: "Medio",
    pasos: [
      "La escuela reporta la matrícula a la Coordinación Nacional de Becas.",
      "Consultar el \"Buscador de Estatus\" con la CURP del alumno.",
      "Si la escuela es susceptible, llenar la Cédula de Solicitud de Incorporación en Línea (CSI).",
      "Recibir la tarjeta del Banco del Bienestar."
    ],
    requisitos: [
      "Estar inscrito en una escuela pública de modalidad escolarizada",
      "No contar con otra beca federal",
      "Comprobante de inscripción."
    ]
  },
  "pension-bienestar-adultos": {
    title: "PENSIÓN BIENESTAR (ADULTOS MAYORES)",
    description: "Inscripción al programa constitucional de pensiones económicas para adultos mayores en México.",
    time: "30 min",
    difficulty: "Medio",
    pasos: [
      "Estar atento a las fechas de registro según el calendario oficial de la Secretaría de Bienestar (por letra del apellido).",
      "Ubicar el módulo de Bienestar más cercano.",
      "Acudir con la documentación (y un auxiliar si se requiere).",
      "Esperar el mensaje de texto para recoger la Tarjeta del Bienestar."
    ],
    requisitos: [
      "Tener 65 años cumplidos",
      "Identificación oficial vigente",
      "CURP",
      "Acta de nacimiento",
      "Comprobante de domicilio."
    ]
  },
  "jovenes-construyendo-futuro": {
    title: "JÓVENES CONSTRUYENDO EL FUTURO",
    description: "Vinculación al programa de capacitación laboral con apoyo económico mensual para jóvenes.",
    time: "35 min",
    difficulty: "Medio",
    pasos: [
      "Registrarse en la plataforma web oficial del programa como aprendiz.",
      "Completar los datos y subir los documentos solicitados.",
      "Elegir un Centro de Trabajo cercano de acuerdo a los intereses.",
      "Acudir a la entrevista con el tutor asignado para iniciar la capacitación y recibir la tarjeta de pago."
    ],
    requisitos: [
      "Tener entre 18 y 29 años",
      "No estar estudiando ni trabajando actualmente",
      "Identificación oficial",
      "Comprobante de domicilio",
      "CURP."
    ]
  }
};