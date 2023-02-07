import { Component } from '@angular/core';
import { PdfMakeWrapper, Txt, Table, Cell } from 'pdfmake-wrapper';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  generatePDF() {
    const pdf = new PdfMakeWrapper();

    pdf.add([
      new Txt('APLICATIVO DE CICLOS RÁPIDOS DE MEJORAMIENTO CONTINUO').alignment('center').bold().italics().lineHeight(3).end,
      new Txt('DATOS DE IDENTIFICACIÓN DEL EMC').alignment('center').lineHeight(3).bold().end,
    ])

    pdf.add(new Table([
      ['ESTABLECIMIENTO DE SALUD:', 'ISIDRO AYORA', 'TIPOLOGÍA:', 'III NIVEL'],
      ['ZONA:', '7', 'PROVINCIA:', 'Loja'],
      ['DISTRITO:', '3', 'SERVICIO Y PROCESO DE ATENCIÓN:', 'DEPARTAMENTO QUIRURGICO']]).end,)

    pdf.add([
      new Txt('  ').end,
    ])


    pdf.add(new Table([
      ['CICLO NRO:', '1', 'FECHA DE INICIO:', '12/01/2023', 'FECHA DE FIN:', '12/03/2023']]).lineHeight(2).end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add([
      new Txt('MEJORAMIENTO CONTINUO').alignment('center').bold().lineHeight(2).end,
    ])

    pdf.add([
      new Txt('1. IDENTIFICAR: ¿Cual es el problema? Definir y priorizar que hay que mejorar').lineHeight(2).bold().fontSize(10).end,
    ])

    pdf.add([
      new Txt('Falta de interconsulta con el servicio de salud mental, en pacientes diagnósticados por primera vez con una patología oncológica.').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('2. ANALIZAR: Comprender el problema y encontrar las causa').lineHeight(2).bold().fontSize(10).end,
    ])

    pdf.add([
      new Txt('2.1 Causa/s').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('1. Desinterés para la atención psicosocia').lineHeight(2).fontSize(9).end,
      new Txt('2. Trastornos psicológicos de pacientes y familiares').lineHeight(2).fontSize(9).end,
      new Txt('3. Falta de tamizaje psicosocial').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('2.2 Clasifique en la celda correspondiente con una X el ámbito o aspecto al que pertenece la causa identificada ').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add(new Table([
      ['Organizacional', 'Técnico/Científico', 'Administrativo', 'Financiero', 'Otro (Cuál)', 'Registre la/s  DIMENSIONES DE LA CALIDAD afectadas'],
      [' ', '  ', ' X ', '  ', '  ', 'Accesibilidad y Eficiencia']]).fontSize(10).alignment('center').end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add([
      new Txt('3. DESARROLLAR: Formular Hipótesis de los cambios para solucionar problema').lineHeight(2).bold().fontSize(10).end,
    ])

    pdf.add([
      new Txt('PREGUNTA 3.1:  ¿Cuál es el Objetivo que se quiere  lograr?').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('Objetivo general: Disminuir la lista de espera de pacientes quirúrgicos de consulta externa del HEJCA en el lapso de tres meses.').lineHeight(2).fontSize(9).end,
      new Txt('• Reconocer las especialidades con mayor demanda de cirugías represadas.').lineHeight(2).fontSize(9).end,
      new Txt('• Reducir el porcentaje de cirugías programadas derivadas a la Red Pública y Complementaria.').lineHeight(2).fontSize(9).end,
      new Txt('• Monitorear el buen funcionamiento del quirófano asignado para la realización de cirugías programadas los fines de semana.').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('PREGUNTA  3.2: ¿Cómo sabremos que el cambio realizado produjo una mejora en el proceso?  Identifique y escriba un indicador que le permita respaldar si hubo o no una mejora de calidad en el proceso de atención involucrado').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('N° de capacitaciones realizadas a profesionales de la salud sobre salud mental de los pacientes / N° total de capacitaciones a profesionales de la salud programadas').bold().lineHeight(2).fontSize(9).end,
      new Txt('N°1 = 20').lineHeight(2).fontSize(9).end,
      new Txt('N°2 = 24').lineHeight(2).fontSize(9).end,
      new Txt('Indicador 1: 93.33%').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('N° de charlas dadas al paciente y familia/ N° de charlas programadas').bold().lineHeight(2).fontSize(9).end,
      new Txt('N°1 = 10').lineHeight(2).fontSize(9).end,
      new Txt('N°2 = 14').lineHeight(2).fontSize(9).end,
      new Txt('Indicador 2: 71.42%').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('PREGUNTA  3.3: ¿Cuáles son los cambios, las estrategias o las intervenciones que se quiere introducir en el proceso?').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add(new Table([
      ['Cambio 1', 'Cambio 2'],
      ['Capacitación por parte del equipo de salud mental al personal sanitario', 'Charlas por parte del equipo de salud mental al paciente y familia']]).fontSize(10).end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add([
      new Txt('4. Planificar').lineHeight(2).bold().fontSize(10).end,
    ])

    pdf.add(new Table([
      ['CAMBIO 1', 'ACTIVIDADES', 'DONDE', 'FECHA INICIO', 'FECHA FIN', 'RECURSOS', 'RESPONSABLES'],
      ['Capacitación por parte del equipo de salud mental al personal sanitario', 'Registrar los pacientes que serán intervenidos quirúrgicamente los fines de semana', 'Consulta externa', '12/01/2023', '12/03/2023', 'Historias clínicas', 'Médicos tratantes']]).fontSize(10).end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add(new Table([
      ['CAMBIO 2', 'ACTIVIDADES', 'DONDE', 'FECHA INICIO', 'FECHA FIN', 'RECURSOS', 'RESPONSABLES'],
      ['Charlas por parte del equipo de salud mental al paciente y familia', 'Registrar los pacientes que serán intervenidos quirúrgicamente los fines de semana', 'Consulta externa', '12/01/2023', '12/03/2023', 'Historias clínicas', 'Médicos tratantes']]).fontSize(10).end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add([
      new Txt('4.1 EJECUTAR: El equipo técnico de control de la calidad del HEJCA comprobó la implementación de los cambios a través de la realización de las siguientes acciones:').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('a) Registro de horarios para el personal que participó en la jornada quirúrgica de los fines de semana.').lineHeight(2).fontSize(9).end,
      new Txt('b) Recepción de partes operatorios de las cirugias programadas los fines de semana').lineHeight(2).fontSize(9).end,
      new Txt('c) Registro de pacientes intervenidos quirúrgicamente los fines de semana').lineHeight(2).fontSize(9).end,
      new Txt('d) Registro del número de formularios 053 elaborados por cada cirugia programda derivada').lineHeight(2).fontSize(9).end,
      new Txt('e) Elaboración de un censo de la cirugias realizadas de acuerdo a cada especialidad').lineHeight(2).fontSize(9).end,
      new Txt('f) Contabilizar el número de cirugías realizadas durante el fin de semana ').lineHeight(2).fontSize(9).end,
      new Txt('g) Elaboración del check list').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('Además, a continuación, se detallan los nudos críticos que pueden surgir durante el proceso de implementación del ciclo rápido').lineHeight(2).fontSize(9).end,
      new Txt('a) Resistencia de los médicos tratantes para revisar la lista de espera de los pacientes represados para cirugías programadas.').lineHeight(2).fontSize(9).end,
      new Txt('b) Poca colaboración del departamento de estadística para acceder a las historias clínicas de los pacientes con cirugías represadas. ').lineHeight(2).fontSize(9).end,
      new Txt('c) Falta de compromiso del Departamento de Calidad en la inspección del quirófano asignado para las cirugías programadas. ').lineHeight(2).fontSize(9).end,
      new Txt('d) Poco personal dispuesto a trabajar el fin de semana.').lineHeight(2).fontSize(9).end,
      new Txt('e) Situación presupuestaria actual del hospital deficiente.').lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('4.3 VERIFICAR:  Escriba aquí qué es lo que sucedió con la situación inicial que quería ser mejorada, luego de que se implementó el o los  cambio/s en este ciclo rápido (mejoró, quedó igual, empeoró?) Respalde lo dicho registrando el valor del indicador ANTES del Ciclo Rápido y DESPUÉS  del Ciclo Rápido').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('El equipo de calidad determinará si la situación del hospital mejoró con la aplicación del plan de acción en base a los siguientes indicadores:').lineHeight(2).fontSize(9).end,
      new Txt('a) Número de pacientes operados los fines de semana sobre el número total de pacientes en lista de espera de cirugías programadas ').lineHeight(2).fontSize(9).end,
      new Txt('b) Número de intervenciones realizadas los fines de semana de acuerdo al tipo de especialidad sobre el número total de pacientes en lista de espera de cirugías programadas  ').lineHeight(2).fontSize(9).end,
      new Txt('c) Numero de cirugías derivadas a la red pública y complementaria de salud sobre el número total de pacientes en lista de espera de cirugías programadas ').lineHeight(2).fontSize(9).end,
    ])

    pdf.add(new Table([
      ['Antes', 'Después'],
      ['Indicador 1', 'Indicador 1'],
      ['50%', '93.33%'],
      ['Indicador 2', 'Indicador 2'],
      ['60%', '71.42%']]).fontSize(10).end,)

    pdf.add([
      new Txt('  ').end,
    ])

    pdf.add([
      new Txt('4.4 ACTUAR: Escriba aquí qué es lo que el Equipo de Mejoramiento de la Calidad  decidió hacer luego de la implementación de este ciclo rápido para el mejoramiento y de observar los resultados obtenidos').italics().lineHeight(2).fontSize(9).end,
    ])

    pdf.add([
      new Txt('El equipo de mejoramiento de la calidad decidirá implementar el programa de cirugías represadas los fines de semana hasta lograr una reducción del 50 al 75% de pacientes represados en la lista de espera de cirugías programadas.').lineHeight(2).fontSize(9).end,
    ])

    pdf.add(new Table([
      [' ', 'Nombres', 'Cargo', 'Firma'],
      ['Aprobado por: ', 'Alejandra Paute', 'Cirujana General', '__________________'],
      ['Revisado por:', 'Julio Luna', 'Administrativo', '__________________'],
      ['Elaborado por:', 'Crithian Villamarin', 'Enfermero', '__________________'],]).alignment('center').fontSize(12).end,)




    pdf.create().open();

  }

}
