import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-salud',
  imports: [CommonModule],
  templateUrl: './salud.component.html',
  styleUrl: './salud.component.css',
  animations: [
    trigger('accordionAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('250ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class SaludComponent {
  /*Seccion para los modales que se levantan*/
  modalAbierto = false;
  pdfTitulo: string = '';
  pdfRuta!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  abrirModal(titulo: string, ruta: string) {
    this.pdfTitulo = titulo;
    this.pdfRuta = this.sanitizer.bypassSecurityTrustResourceUrl(ruta);
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.pdfTitulo = '';
    this.pdfRuta = '';
  }

  /*Seccion para el FAQ */
    preguntas = [
    {
      titulo: '¿Cómo puedo acceder al convenio con farmacias aliadas?',
      respuesta: `
      <p>Para hacer uso de este beneficio, sigue estos pasos: </p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Descarga la aplicación TuAppFarmacia</strong>, disponible en App Store y Google Play.</li>
        <li><strong>Regístrate</strong> en la sección <strong>"Experiencia Premium"</strong>.</li>
        <li><strong>Genera tu código </strong>desde la aplicación.</li>
        <li><strong>Realiza tu compra </strong>utilizando el código obtenido.</li>
      </ul>
      <p class="italic"><strong>Importante:</strong> En caso de que no puedas registrarte o se presente algún error, por favor <strong>reporta la situación de inmediato al área de Recursos Humanos</strong>. </p>
      `,
      abierta: false
    },
    {
      titulo: '¿Qué requisitos debo cumplir para solicitar el crédito ambulatorio de exámenes médicos? ',
      respuesta: `
      <p>Para gestionar el crédito ambulatorio correspondiente a exámenes médicos, es indispensable que se remita la orden médica con la siguiente información:  </p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Nombres y apellidos completos del paciente.</li>
        <li><strong>Regístrate</strong> en la sección <strong>"Experiencia Premium"</strong>.</li>
        <li>Diagnóstico médico.</li>
        <li>Detalle específico del examen solicitado.</li>
        <li>Relación clara entre el diagnóstico y el examen requerido.</li>
      </ul>
      <p>La orden debe contar con <strong>fecha actual</strong>, con un <strong>máximo de 10 días de emisión</strong>, y debe incluir el detalle completo de cada uno de los exámenes solicitados.</p>
      <p>Una vez recibida la documentación, el crédito ambulatorio será procesado en un plazo de <strong>24 horas hábiles</strong>, o se notificará cualquier novedad relacionada con el trámite. </p>
      `,
      abierta: false
    },
    {
      titulo: '¿A partir de qué mes se activa mi seguro médico privado?',
      respuesta: `
      <p>El seguro médico privado <strong>HUMANA</strong> se activa a partir del <strong>primer mes</strong> para el <strong>personal administrativo (ADM)</strong>. </p>
      <p>Para el <strong>personal de ventas</strong>, el ingreso inicial es con el seguro <strong>INMEDICAL</strong>, y una vez cumplido el <strong>primer año de antigüedad</strong>, se activa la cobertura con <strong>HUMANA</strong>.</p>
      `,
      abierta: false
    },
    {
      titulo: '¿Cuál es el monto aseguro en el seguro de vida?',
      respuesta: `
      <p>En caso de fallecimiento, el seguro contempla un <strong>monto asegurado de $5.000</strong>.</p>
      <p>Si aplica el <strong>beneficio anticipado por enfermedad terminal</strong>, se otorga un monto adicional de <strong>$2.500</strong>, que se suma a la cobertura mencionada.</p>
      `,
      abierta: false
    },
    {
      titulo: '¿Qué establece el Reglamento de Seguridad y Salud Ocupacional?',
      respuesta: `
      <p>Este conjunto de normas y lineamientos tiene como objetivo principal <strong>garantizar la protección de la seguridad y salud de los trabajadores en el entorno laboral</strong>.</p>
      <p>Establece claramente los <strong>derechos y obligaciones</strong> tanto de los empleadores como de los colaboradores, y define los <strong>mecanismos para la prevención de riesgos laborales</strong>, así como la <strong>gestión adecuada de accidentes y enfermedades profesionales</strong>.</p>
      <p>Estas disposiciones forman parte del compromiso institucional con un ambiente de trabajo seguro, saludable y en cumplimiento con la normativa vigente.</p>
      `,
      abierta: false
    }
  ];

  togglePregunta(index: number) {
    // Cierra todas
    this.preguntas.forEach((p, i) => p.abierta = i === index ? !p.abierta : false);
  }
}
