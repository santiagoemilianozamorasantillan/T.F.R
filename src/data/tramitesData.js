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

// 2. DETALLE PASO A PASO (CON SECCIÓN DE OBTENCIÓN Y VÍNCULOS AGREGADOS)
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
    ],
    comoObtener: [
      "La CURP se descarga gratis desde el portal oficial de SEGOB.",
      "El pago se realiza de forma segura dentro de la misma plataforma del gobierno usando tu tarjeta bancaria bancaria o en ventanilla."
    ],
    links: [
      { name: "Portal Oficial de Actas de Nacimiento", url: "https://www.gob.mx/ActaNacimiento/" },
      { name: "Consultar CURP Gratis", url: "https://www.gob.mx/curp/" }
    ]
  },
  "cambio-domicilio-ine": {
    title: "CAMBIO DE DOMICILIO DEL INE",
    description: "Actualiza tu dirección en el Padrón Electoral para mantener tu credencial para votar vigente.",
    time: "45 min",
    difficulty: "Medio",
    pasos: [
      "Agendar una cita en el portal web del INE.",
      "Acudir al Módulo de Atención Ciudadana seleccionado el día de la cita con los documentos originales.",
      "Confirmar los datos en el sistema y capturar fotografía y huellas.",
      "Recoger la nueva credencial en la fecha indicada con el comprobante del trámite."
    ],
    requisitos: [
      "Documento de identidad (acta de nacimiento)",
      "Identificación con fotografía (credencial actual)",
      "Comprobante de domicilio reciente (no mayor a 3 meses)"
    ],
    comoObtener: [
      "El acta de nacimiento original la puedes obtener certificada en línea.",
      "Los comprobantes de domicilio aceptados son luz, agua, teléfono o predial (pueden ser tus recibos digitales oficiales impresos)."
    ],
    links: [
      { name: "Sistema de Citas INE", url: "https://ubicatumodulo.ine.mx/" },
      { name: "Obtener Acta de Nacimiento en Línea", url: "https://www.gob.mx/ActaNacimiento/" }
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
    ],
    comoObtener: [
      "Si no te sabes tu CURP, selecciona la pestaña 'Datos Personales' para buscarla introduciendo tu nombre, fecha y estado de nacimiento."
    ],
    links: [
      { name: "Portal de Consulta de CURP (SEGOB)", url: "https://www.gob.mx/curp/" }
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
    ],
    comoObtener: [
      "La cita se agenda exclusivamente en el portal del Gobierno SRE o vía su número de WhatsApp oficial.",
      "El formato de pago se descarga al terminar de agendar la cita y se paga físicamente en el banco antes de acudir a las oficinas."
    ],
    links: [
      { name: "Portal de Citas SRE", url: "https://citas.sre.gob.mx/" },
      { name: "Formatos e Información de Costos SRE", url: "https://www.gob.mx/pasaporte" }
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
    ],
    comoObtener: [
      "Si no recuerdas tu RFC, puedes consultarlo de forma oficial con tu CURP en el portal de trámites del SAT."
    ],
    links: [
      { name: "Portal General Citas SAT", url: "https://citas.sat.gob.mx/" },
      { name: "Consulta de RFC con CURP", url: "https://www.sat.gob.mx/aplicacion/operacion/31274/consulta-tu-clave-de-rfc-mediante-curp" }
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
    ],
    comoObtener: [
      "Debes adquirir una memoria USB completamente nueva o formateada.",
      "La cita se obtiene en la aplicación de Citas SAT seleccionando el módulo correspondiente."
    ],
    links: [
      { name: "Obtener Cita para e.firma", url: "https://citas.sat.gob.mx/" },
      { name: "Requisitos Completos e.firma - SAT", url: "https://www.sat.gob.mx" }
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
    ],
    comoObtener: [
      "La CLABE interbancaria la obtienes directamente desde la app móvil de tu banco o en tu estado de cuenta.",
      "La contraseña SAT la puedes generar o renovar desde casa a través de la aplicación oficial SAT ID."
    ],
    links: [
      { name: "Portal de Declaración Anual SAT", url: "https://www.sat.gob.mx/" },
      { name: "Generar Contraseña con SAT ID", url: "https://satid.sat.gob.mx/" }
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
    ],
    comoObtener: [
      "La app SAT ID está disponible de forma gratuita para iOS y Android, o bien puedes realizarlo en su portal web oficial con una cámara web activa."
    ],
    links: [
      { name: "Sitio Web SAT ID", url: "https://satid.sat.gob.mx/" }
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
    ],
    comoObtener: [
      "El estado de cuenta de tu AFORE se solicita directamente en la aplicación móvil de tu Administradora de Fondos o llamando a su línea de atención.",
      "Puedes revisar tus semanas cotizadas oficiales en línea antes de iniciar el trámite."
    ],
    links: [
      { name: "Consultar Semanas Cotizadas", url: "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsignado" },
      { name: "Localiza tu AFORE (CONSAR)", url: "https://www.gob.mx/consar" }
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
    ],
    comoObtener: [
      "La vigencia de derechos se puede consultar y descargar en segundos desde el escritorio virtual del IMSS.",
      "El registro de tu CLABE para el cobro de la incapacidad se realiza en el portal del IMSSDigital."
    ],
    links: [
      { name: "Consultar Vigencia de Derechos IMSS", url: "https://serviciosdigitales.imss.gob.mx/gestion/vigencia" },
      { name: "Escritorio Virtual IMSS Digital", url: "https://www.imss.gob.mx/digital" }
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
      "Descargar el documento con el NSS and la tarjeta correspondiente.",
      "Entregar el número al empleador para que realice el alta patronal."
    ],
    requisitos: [
      "CURP",
      "Correo electrónico personal",
      "Acta de nacimiento."
    ],
    comoObtener: [
      "El trámite es completamente digital y gratuito en la página oficial del Seguro Social. Solo necesitas tu CURP y un correo electrónico."
    ],
    links: [
      { name: "Trámite de Asignación de NSS", url: "https://serviciosdigitales.imss.gob.mx/gestion/nss" }
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
    ],
    comoObtener: [
      "Tanto tu CURP como tu NSS se pueden obtener en línea en caso de que los hayas extraviado, usando los portales del gobierno correspondientes."
    ],
    links: [
      { name: "Portal de Semanas Cotizadas IMSS", url: "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsignado" },
      { name: "Localizar tu NSS en Línea", url: "https://serviciosdigitales.imss.gob.mx/gestion/nss" }
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
    ],
    comoObtener: [
      "Puedes descargar la app 'IMSS Digital' desde la Play Store (Android) o App Store (iOS) en tu celular para agendar citas en un par de clics."
    ],
    links: [
      { name: "Portal de Citas Médicas IMSS Web", url: "https://citamedicadigital.imss.gob.mx/" },
      { name: "Página de Descarga IMSS Digital", url: "https://www.imss.gob.mx/digital" }
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
    ],
    comoObtener: [
      "La receta resurtible la emite únicamente el médico familiar del IMSS tras valorar que tu padecimiento crónico se encuentra bajo control."
    ],
    links: [
      { name: "Información Programa Receta Resurtible", url: "https://www.imss.gob.mx" }
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
    ],
    comoObtener: [
      "El trámite se puede iniciar de manera digital ingresando con tu e.firma o CURP en el Escritorio Virtual del IMSS."
    ],
    links: [
      { name: "Corrección de Datos en Escritorio Virtual", url: "https://serviciosdigitales.imss.gob.mx/bvirtual-web/inicio" }
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
    ],
    comoObtener: [
      "Este documento se genera de forma inmediata y 100% gratuita a través del portal oficial de trámites del IMSS digitales."
    ],
    links: [
      { name: "Portal de Consulta de Vigencia IMSS", url: "https://serviciosdigitales.imss.gob.mx/gestion/vigencia" }
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
    ],
    comoObtener: [
      "Los comprobantes de pago de predial y agua se obtienen en las oficinas de la tesorería de tu municipio o en sus portales digitales de recaudación."
    ],
    links: [
      { name: "Portal de Trámites de la Propiedad (Gobierno)", url: "https://www.gob.mx" }
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
    ],
    comoObtener: [
      "El acta de defunción se tramita ante las oficinas del Registro Civil de la localidad donde ocurrió el deceso o en sus servicios digitales estatales."
    ],
    links: [
      { name: "Directorio de Notarios de México", url: "https://www.gob.mx" }
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
    ],
    comoObtener: [
      "El certificado de Libertad de Gravamen se solicita formalmente ante el Registro Público de la Propiedad de tu entidad federativa."
    ],
    links: [
      { name: "Guía de Compra de Vivienda (PROFECO)", url: "https://www.gob.mx/profeco" }
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
    ],
    comoObtener: [
      "La precalificación de puntos y el curso obligatorio se realizan de manera virtual registrándote en el portal 'Mi Cuenta Infonavit'."
    ],
    links: [
      { name: "Portal Mi Cuenta INFONAVIT", url: "https://micuenta.infonavit.org.mx/" }
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
    ],
    comoObtener: [
      "Para renovar u obtener uno nuevo por pérdida, debes sacar cita previa en las delegaciones u oficinas en el portal oficial de Citas de la SRE."
    ],
    links: [
      { name: "Agendar Renovación en SRE", url: "https://citas.sre.gob.mx/" }
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
    ],
    comoObtener: [
      "El formulario DS-160 se llena únicamente de manera electrónica en el portal oficial de Visas del Departamento de Estado del país de destino."
    ],
    links: [
      { name: "Portal Oficial de Embajada de EE.UU.", url: "https://mx.usembassy.gov/es/" }
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
    ],
    comoObtener: [
      "Los permisos migratorios electrónicos oficiales (como el ESTA o similares) se solicitan y aprueban vía web únicamente en los portales gubernamentales legítimos."
    ],
    links: [
      { name: "Guía del Viajero - SRE", url: "https://guiadelviajero.sre.gob.mx/" }
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
    ],
    comoObtener: [
      "Tu clave de reservación (código alfanumérico de 6 caracteres) te llega directo al correo electrónico que usaste para comprar el vuelo."
    ],
    links: [
      { name: "Consulta de Vuelos - AICM", url: "https://www.aicm.com.mx/" }
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
    ],
    comoObtener: [
      "El Buscador de Estatus digital oficial te indicará con precisión si tu escuela califica y las fechas exactas para llenar tu cédula en línea."
    ],
    links: [
      { name: "Buscador de Estatus Benito Juárez", url: "https://buscador.becasbenitojuarez.gob.mx/" }
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
    ],
    comoObtener: [
      "El módulo de atención física que te corresponde por domicilio lo debes ubicar usando la plataforma interactiva de la Secretaría del Bienestar."
    ],
    links: [
      { name: "Ubica tu Módulo Bienestar", url: "https://www.gob.mx/bienestar" }
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
    ],
    comoObtener: [
      "La inscripción como aprendiz y la posterior postulación al centro de capacitación elegido se efectúa 100% en la plataforma oficial del programa."
    ],
    links: [
      { name: "Plataforma Jóvenes Construyendo el Futuro", url: "https://jovenesconstruyendoelfuturo.stps.gob.mx/" }
    ]
  }
};