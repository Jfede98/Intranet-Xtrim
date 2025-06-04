import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-beneficios-corpo',
  imports: [CommonModule],
  templateUrl: './beneficios-corpo.component.html',
  styleUrl: './beneficios-corpo.component.css',
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
export class BeneficiosCorpoComponent {
  /*Seccion para el Modal del pdf*/
  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  /*Seccion cards beneficios */
  verMas = false;

  beneficios = [
    {
      titulo: 'Plan Corporativo de Telefonía Celular',
      imagen: 'bene-telefono.png',
      descripcion: 'Accede a chip corporativo o integra tu línea personal con descuento especial.'
    },
    {
      titulo: 'Tarjeta de Almacenes Tía',
      imagen: 'bene-tia.png',
      descripcion: 'Para vendedores. Compra a crédito desde el 4º mes en tiendas Tía.'
    },
    {
      titulo: 'Movilización para Nuevos Vendedores',
      imagen: 'bene-vendedores.png',
      descripcion: 'Te cubrimos movilización durante tus 3 primeros meses en el área de ventas.'
    },
    {
      titulo: 'Zapping Plan Fútbol Gratis',
      imagen: 'bene-zapp.png',
      descripcion: 'Accede al mejor contenido deportivo gratis con el plan Zapping Fútbol.'
    },
    {
      titulo: 'Miércoles de Fruta',
      imagen: 'bene-fruta.png',
      descripcion: 'Todos los miércoles ofrecemos fruta fresca al personal de oficina.'
    }
  ];

  toggleVerMas() {
    this.verMas = !this.verMas;
  }
  /*Seccion para el FAQ */
    preguntas = [
    {
      titulo: '¿Cuándo puedo solicitar la tarjeta Tía y cómo la obtengo?',
      respuesta: `
      <p>La entrega de este beneficio se realiza a partir del <strong>cuarto mes</strong> de haber ingresado a la empresa. Este beneficio es <strong>exclusivamente aplicable para vendedores residenciales y vendedores isla</strong>.</p>
      `,
      abierta: false
    },
    {
      titulo: '¿Qué incluye el plan corporativo de telefonía?',
      respuesta: `
      <p>Se puedes acceder a este beneficio de dos maneras: mediante un chip corporativo de la empresa o integrando tu línea personal al plan corporativo con un descuento especial.</p>
      <p>Los planes disponibles son los siguientes: </p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Plan Sin Límite $10 (26 GB Total).</li>
        <li>Plan Sin Límite $15 (45 GB Total).</li>
        <li>Plan Sin Límite $20 (58 GB Total).</li>
      </ul>
      `,
      abierta: false
    },
    {
      titulo: '¿Quiénes pueden acceder al beneficio de “miércoles de frutas”?',
      respuesta: `
      <p>Este beneficio es <strong>exclusivo para el personal de oficina</strong> de Xtrim. Como parte de nuestro compromiso con el bienestar del equipo, cada miércoles, de <strong>11h00 a 13h00</strong>, se habilitan estaciones con frutas frescas en los siguientes puntos: </p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Matriz Guayaquil:</strong> frente al ascensor en cada piso.</li>
        <li><strong>Matriz Quito:</strong> en el comedor de cada piso. </li>
        <li><strong>Propiesa, JTM, Head End y Villaflora:</strong> en el comedor de cada sede. Se recomienda tomar <strong>una fruta por persona</strong>. </li>
      </ul>
      `,
      abierta: false
    },
    {
      titulo: '¿El beneficio de movilización aplica a todos los nuevos colaboradores?',
      respuesta: 'Aplica únicamente para vendedores residenciales.',
      abierta: false
    },
    {
      titulo: '¿Cómo activo el beneficio de Zapping Plan Plus?',
      respuesta: `
      <p>Todos los colaboradores cuentan con este beneficio desde su <strong>primer día de ingreso</strong>, sin excepción alguna. Es importante que el registro se realice utilizando los datos <strong>adjuntos en el contrato de trabajo</strong> para garantizar la correcta asignación del beneficio.</p>
      `,
      abierta: false
    }
  ];

  togglePregunta(index: number) {
    // Cierra todas
    this.preguntas.forEach((p, i) => p.abierta = i === index ? !p.abierta : false);
  }
}
