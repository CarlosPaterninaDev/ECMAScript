/* TODO: Flat  */

// Crea una matriz con todos los elementos de un sub array concatenados recursivamente hasta una profundidad especificada

let array = [1,2,3, [1,2,3,  [1,2,3]]];

let permisos = [
  [
      {
          "Codigo_Menu": "ww01",
          "Descripcion_Menu": "Personal",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "people-outline"
      },
      {
          "Codigo_Menu": "ww0101",
          "Descripcion_Menu": "Estado Mensual",
          "Componente": "/estado_mensual",
          "Padre_Menu": "ww01",
          "Icono": "wallet-outline"
      },
      {
          "Codigo_Menu": "ww0102",
          "Descripcion_Menu": "Horario Laboral",
          "Componente": "/horario",
          "Padre_Menu": "ww01",
          "Icono": "calendar-outline"
      },
      {
          "Codigo_Menu": "ww0104",
          "Descripcion_Menu": "Entrega de turnos",
          "Componente": "/entrega_turno",
          "Padre_Menu": "ww01",
          "Icono": "chatbubbles-outline"
      },
      {
          "Codigo_Menu": "ww02",
          "Descripcion_Menu": "Historia Clínica",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "document-text-outline"
      },
      {
          "Codigo_Menu": "ww0206",
          "Descripcion_Menu": "Cuidados Intensivos",
          "Componente": "/listado_uci",
          "Padre_Menu": "ww02",
          "Icono": "bed-outline"
      },
      {
          "Codigo_Menu": "ww0207",
          "Descripcion_Menu": "Auditoria Facturación",
          "Componente": "/listado_facturacion",
          "Padre_Menu": "ww02",
          "Icono": "color-wand-outline"
      },
      {
          "Codigo_Menu": "ww03",
          "Descripcion_Menu": "Admisiones",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "people-circle-outline"
      },
      {
          "Codigo_Menu": "ww0301",
          "Descripcion_Menu": "Pacientes",
          "Componente": "/paciente",
          "Padre_Menu": "ww03",
          "Icono": "person-add-outline"
      },
      {
          "Codigo_Menu": "ww04",
          "Descripcion_Menu": "Inventario",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "cube-outline"
      },
      {
          "Codigo_Menu": "ww0401",
          "Descripcion_Menu": "Procesos",
          "Componente": "/inventario_proceso",
          "Padre_Menu": "ww04",
          "Icono": "cog-outline"
      },
      {
          "Codigo_Menu": "ww05",
          "Descripcion_Menu": "Ambulancia",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "megaphone-outline"
      },
      {
          "Codigo_Menu": "ww0501",
          "Descripcion_Menu": "Atención Ambulancia",
          "Componente": "/ambulancia",
          "Padre_Menu": "ww05",
          "Icono": "body-outline"
      },
      {
          "Codigo_Menu": "ww0502",
          "Descripcion_Menu": "Pacientes",
          "Componente": "/paciente",
          "Padre_Menu": "ww05",
          "Icono": "person-add-outline"
      },
      {
          "Codigo_Menu": "ww10",
          "Descripcion_Menu": "Informes Gerenciales",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "stats-chart-outline"
      },
      {
          "Codigo_Menu": "ww1001",
          "Descripcion_Menu": "Asistencial",
          "Componente": "/estadistica_asistencial",
          "Padre_Menu": "ww10",
          "Icono": "people-outline"
      },
      {
          "Codigo_Menu": "ww20",
          "Descripcion_Menu": "Configuración General",
          "Componente": null,
          "Padre_Menu": null,
          "Icono": "options-outline"
      },
      {
          "Codigo_Menu": "ww2001",
          "Descripcion_Menu": "Perfiles de Usuario",
          "Componente": "/perfil",
          "Padre_Menu": "ww20",
          "Icono": "people-outline"
      }
  ],
  [
      {
          "Codigo_Menu": "ww0101pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0101",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0101pp01",
          "Descripcion_Menu": "Ver Historial",
          "Componente": "/historial",
          "Padre_Menu": "ww0101pp",
          "Icono": "calendar-outline"
      },
      {
          "Codigo_Menu": "ww0101pp02",
          "Descripcion_Menu": "Ver Historial Otros",
          "Componente": "/historial/:id",
          "Padre_Menu": "ww0101pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0101pp03",
          "Descripcion_Menu": "Nómina",
          "Componente": "nomina",
          "Padre_Menu": "ww0101pp",
          "Icono": "cash-outline"
      },
      {
          "Codigo_Menu": "ww0101pp04",
          "Descripcion_Menu": "Glosas",
          "Componente": "detalle_glosa",
          "Padre_Menu": "ww0101pp",
          "Icono": "file-tray-full-outline"
      },
      {
          "Codigo_Menu": "ww0101pp05",
          "Descripcion_Menu": "Libranzas",
          "Componente": "detalle_libranza",
          "Padre_Menu": "ww0101pp",
          "Icono": "card-outline"
      },
      {
          "Codigo_Menu": "ww0101pp06",
          "Descripcion_Menu": "Aportes",
          "Componente": "aportes",
          "Padre_Menu": "ww0101pp",
          "Icono": "card-outline"
      },
      {
          "Codigo_Menu": "ww0102pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0102",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0102pp01",
          "Descripcion_Menu": "Editar Convención",
          "Componente": "editar_convencion",
          "Padre_Menu": "ww0102pp",
          "Icono": "create-outline"
      },
      {
          "Codigo_Menu": "ww0102pp02",
          "Descripcion_Menu": "Editar Huellas",
          "Componente": "editar_huella",
          "Padre_Menu": "ww0102pp",
          "Icono": "finger-print-outline"
      },
      {
          "Codigo_Menu": "ww0102pp03",
          "Descripcion_Menu": "Asignar Permisos",
          "Componente": "asignar_permiso",
          "Padre_Menu": "ww0102pp",
          "Icono": "key-outline"
      },
      {
          "Codigo_Menu": "ww0102pp04",
          "Descripcion_Menu": "Editar Observación",
          "Componente": "editar_observacion",
          "Padre_Menu": "ww0102pp",
          "Icono": "chatbox-ellipses-outline"
      },
      {
          "Codigo_Menu": "ww0102pp05",
          "Descripcion_Menu": "Asignar Permiso Especial",
          "Componente": "",
          "Padre_Menu": "ww0102pp",
          "Icono": "chatbox-ellipses-outline"
      },
      {
          "Codigo_Menu": "ww0104pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0104",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0104pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0104pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0104pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0104pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0104pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0104pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0104pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0104pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp01pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0202pp01",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp01pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0202pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp02pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0202pp02",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp02pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0202pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp02pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0202pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp02pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0202pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp03pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0202pp03",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp03pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0202pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp03pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0202pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0202pp03pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0202pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0203PP",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0203",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp01",
          "Descripcion_Menu": "Información de Ingreso",
          "Componente": "HcIngresoPage",
          "Padre_Menu": "ww0206pp",
          "Icono": "person-outline"
      },
      {
          "Codigo_Menu": "ww0206pp01pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp01",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp01pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp01pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0206pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp01pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0206pp01pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp01pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0206pp01pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02",
          "Descripcion_Menu": "Ordenes Médicas",
          "Componente": "HcOrdenMedicaPage",
          "Padre_Menu": "ww0206pp",
          "Icono": "reader-outline"
      },
      {
          "Codigo_Menu": "ww0206pp02pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp02",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp02pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0206pp02pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03",
          "Descripcion_Menu": "Evoluciones Médicas",
          "Componente": "HcEvolucionMedicaPage",
          "Padre_Menu": "ww0206pp",
          "Icono": "reader-outline"
      },
      {
          "Codigo_Menu": "ww0206pp03pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp03",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp03pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0206pp03pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04",
          "Descripcion_Menu": "Interconsultas",
          "Componente": "HcInterconsultaPage",
          "Padre_Menu": "ww0206pp",
          "Icono": "Interconsultas"
      },
      {
          "Codigo_Menu": "ww0206pp04pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp04",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp04pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0206pp04pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05",
          "Descripcion_Menu": "Remisión",
          "Componente": "HcRemisionPage",
          "Padre_Menu": "ww0206pp",
          "Icono": "Remision"
      },
      {
          "Codigo_Menu": "ww0206pp05pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp05",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp05pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0206pp05pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08",
          "Descripcion_Menu": "Seguimiento paciente",
          "Componente": null,
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp08",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01",
          "Descripcion_Menu": "Ronda Médica",
          "Componente": "SbarPage",
          "Padre_Menu": "ww0206pp08pp",
          "Icono": "ronda-medica"
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp01pp05",
          "Descripcion_Menu": "Auditoria",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02",
          "Descripcion_Menu": "Entrega de Turnos Médicos",
          "Componente": "SbarPage",
          "Padre_Menu": "ww0206pp08pp",
          "Icono": "entrega-turnos-medicos"
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp02pp05",
          "Descripcion_Menu": "Auditoria",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03",
          "Descripcion_Menu": "Entrega de Turnos Enfermería",
          "Componente": "SbarPage",
          "Padre_Menu": "ww0206pp08pp",
          "Icono": "entrega-turnos-enfermeria"
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp03pp05",
          "Descripcion_Menu": "Auditoria",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04",
          "Descripcion_Menu": "Entrega de Turnos Fisioterapia",
          "Componente": "SbarPage",
          "Padre_Menu": "ww0206pp08pp",
          "Icono": "entrega-turnos-fisioterapia"
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp08pp04pp05",
          "Descripcion_Menu": "Auditoria",
          "Componente": null,
          "Padre_Menu": "ww0206pp08pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp09",
          "Descripcion_Menu": "Enfermeria Insumos",
          "Componente": "HCenfermeriaInsumo",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp09pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp09",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp09pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp09pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp09pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp10",
          "Descripcion_Menu": "Enfermeria Notas",
          "Componente": "HCenfermeriaNota",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp10pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp10",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp10pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp10pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp10pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp11",
          "Descripcion_Menu": "Enfermeria Paraclinicos",
          "Componente": "HCenfermeriaParaclinico",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp11pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp11",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp11pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp11pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp11pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp12",
          "Descripcion_Menu": "Enfermeria Hemoderivados",
          "Componente": "HCenfermeriaHemoderivados",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp12pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp12",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp12pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp12pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp12pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp13",
          "Descripcion_Menu": "Enfermeria Glucometrias",
          "Componente": "HCenfermeriaGlucometrias",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp13pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp13",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp13pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp13pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp13pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp14",
          "Descripcion_Menu": "Fisioterapia Oxigeno",
          "Componente": "HCfisioterapiaOxigeno",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp14pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp14",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp14pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp14pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp14pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp15",
          "Descripcion_Menu": "Fisioterapia Terapia fisica y respiración",
          "Componente": "HCfisioterapiaFisicRespiracion",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp15pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp15",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp15pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp15pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp15pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp16",
          "Descripcion_Menu": "Fisioterapia Insumos",
          "Componente": "HCfisioterapiaInsumo",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp16pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp16",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp16pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp16pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp16pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp17",
          "Descripcion_Menu": "Fisioterapia Notas",
          "Componente": "HCfisioterapiaNota",
          "Padre_Menu": "ww0206pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp17pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0206pp17",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp17pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0206pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp17pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0206pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0206pp17pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0206pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp01",
          "Descripcion_Menu": "Información de Ingreso",
          "Componente": "HcIngresoPage",
          "Padre_Menu": "ww0207pp",
          "Icono": "InformaciondeIngreso"
      },
      {
          "Codigo_Menu": "ww0207pp01pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp01",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp01pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp01pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0207pp01pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp01pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0207pp01pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp01pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0207pp01pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02",
          "Descripcion_Menu": "Ordenes Médicas",
          "Componente": "HcOrdenMedicaPage",
          "Padre_Menu": "ww0207pp",
          "Icono": "OrdenesMedicas"
      },
      {
          "Codigo_Menu": "ww0207pp02pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp02",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp02pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0207pp02pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03",
          "Descripcion_Menu": "Evoluciones Médicas",
          "Componente": "HcEvolucionMedicaPage",
          "Padre_Menu": "ww0207pp",
          "Icono": "EvolucionesMedicas"
      },
      {
          "Codigo_Menu": "ww0207pp03pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp03",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp03pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0207pp03pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04",
          "Descripcion_Menu": "Interconsultas",
          "Componente": "HcInterconsultaPage",
          "Padre_Menu": "ww0207pp",
          "Icono": "Interconsultas"
      },
      {
          "Codigo_Menu": "ww0207pp04pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp04",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp04pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0207pp04pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05",
          "Descripcion_Menu": "Remisión",
          "Componente": "HcRemisionPage",
          "Padre_Menu": "ww0207pp",
          "Icono": "Remision"
      },
      {
          "Codigo_Menu": "ww0207pp05pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp05",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp05pp",
          "Descripcion_Menu": "Envio",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp05pp01",
          "Descripcion_Menu": "Enviar",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp05pp05pp02",
          "Descripcion_Menu": "Reenvio",
          "Componente": null,
          "Padre_Menu": "ww0207pp05pp05pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp09",
          "Descripcion_Menu": "Enfermeria Insumos",
          "Componente": "HCenfermeriaInsumo",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp09pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp09",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp09pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp09pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp09pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp09pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp10",
          "Descripcion_Menu": "Enfermeria Notas",
          "Componente": "HCenfermeriaNota",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp10pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp10",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp10pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp10pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp10pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp10pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp11",
          "Descripcion_Menu": "Enfermeria Paraclinicos",
          "Componente": "HCenfermeriaParaclinico",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp11pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp11",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp11pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp11pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp11pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp11pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp12",
          "Descripcion_Menu": "Enfermeria Hemoderivados",
          "Componente": "HCenfermeriaHemoderivados",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp12pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp12",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp12pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp12pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp12pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp12pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp13",
          "Descripcion_Menu": "Enfermeria Glucometrias",
          "Componente": "HCenfermeriaGlucometrias",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp13pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp13",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp13pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp13pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp13pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp13pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp14",
          "Descripcion_Menu": "Fisioterapia Oxigeno",
          "Componente": "HCfisioterapiaOxigeno",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp14pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp14",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp14pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp14pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp14pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp14pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp15",
          "Descripcion_Menu": "Fisioterapia Terapia fisica y respiración",
          "Componente": "HCfisioterapiaFisicRespiracion",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp15pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp15",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp15pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp15pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp15pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp15pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp16",
          "Descripcion_Menu": "Fisioterapia Insumos",
          "Componente": "HCfisioterapiaInsumo",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp16pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp16",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp16pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp16pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp16pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp16pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp17",
          "Descripcion_Menu": "Fisioterapia Notas",
          "Componente": "HCfisioterapiaNota",
          "Padre_Menu": "ww0207pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp17pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0207pp17",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp17pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0207pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp17pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0207pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0207pp17pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0207pp17pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0301pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0301",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0301pp01",
          "Descripcion_Menu": "Nuevo",
          "Componente": null,
          "Padre_Menu": "ww0301pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0301pp02",
          "Descripcion_Menu": "Editar",
          "Componente": null,
          "Padre_Menu": "ww0301pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0301pp03",
          "Descripcion_Menu": "Anular",
          "Componente": null,
          "Padre_Menu": "ww0301pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0301pp04",
          "Descripcion_Menu": "Buscar",
          "Componente": null,
          "Padre_Menu": "ww0301pp",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0401pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww0401",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww0401pp01",
          "Descripcion_Menu": "Orden de Compra",
          "Componente": "orden_compra",
          "Padre_Menu": "ww0401pp",
          "Icono": "reader-outline"
      },
      {
          "Codigo_Menu": "ww0401pp08",
          "Descripcion_Menu": "Informe Kardex",
          "Componente": "kardex",
          "Padre_Menu": "ww0401pp",
          "Icono": "swap-horizontal-outline"
      },
      {
          "Codigo_Menu": "ww1001pp",
          "Descripcion_Menu": "Opciones",
          "Componente": null,
          "Padre_Menu": "ww1001",
          "Icono": null
      },
      {
          "Codigo_Menu": "ww1001pp01",
          "Descripcion_Menu": "Facturacion mes",
          "Componente": "facturacion_diaria",
          "Padre_Menu": "ww1001pp",
          "Icono": "cellular-outline"
      },
      {
          "Codigo_Menu": "ww1001pp02",
          "Descripcion_Menu": "Facturación y Radicación",
          "Componente": "facturacion_radicacion",
          "Padre_Menu": "ww1001pp",
          "Icono": "bar-chart-outline"
      },
      {
          "Codigo_Menu": "ww1001pp03",
          "Descripcion_Menu": "Facturacion dia",
          "Componente": "facturacion_dia",
          "Padre_Menu": "ww1001pp",
          "Icono": "cellular-outline"
      },
      {
          "Codigo_Menu": "ww1001pp04",
          "Descripcion_Menu": "Comparativo área",
          "Componente": "lkp_prefactura_mes",
          "Padre_Menu": "ww1001pp",
          "Icono": "cellular-outline"
      }
  ]
];

const newArray = array.flat();

console.log(newArray);

// console.log(permisos.flat())



