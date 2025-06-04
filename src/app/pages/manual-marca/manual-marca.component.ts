import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-marca',
  imports: [CommonModule],
  templateUrl: './manual-marca.component.html',
  styleUrl: './manual-marca.component.css'
})
export class ManualMarcaComponent implements OnInit {
  currentSlide = 0;

  pilares = [
    {
      titulo: 'La Marca',
      descripcion: `
      <p>Esta sección busca transmitir el "alma" de Xtrim de forma clara y emocional destacando los siguientes puntos:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Propósito y personalidad:</strong> Qué representa la marca, cómo se comunica y qué la hace única.</li>
        <li><strong>Pilares y territorios:</strong> Valores centrales y áreas de influencia.</li>
        <li><strong>Tagline y arquitectura de marca:</strong> Slogan oficial y cómo se estructuran las submarcas si aplica.</li>
      </ul>
      `,
      imagen: './marca-carrusel.png',
    },
    {
      titulo: 'Logotipo',
      descripcion: `
      <p>Ideal para diseñadores o aliados que trabajan con la imagen de Xtrim.</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Versiones del logo:</strong> Principal, vertical, símbolo.</li>
        <li><strong>Usos recomendados:</strong> Colores correctos, fondos adecuados.</li>
        <li><strong>Errores comunes:</strong> Qué evitar para proteger la integridad visual.</li>
        <li><strong>Tipografía y color:</strong> Principales y secundarios, incluyendo el uso del sistema tipográfico.</li>
      </ul>
    `,
      imagen: './logo-carrusel.png',
    },
    {
      titulo: 'Estilo Visual',
      descripcion: `
      <p>Una guía visual rápida que mantiene la coherencia en todos los canales:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Recursos gráficos:</strong> Qué elementos se pueden usar y cómo.</li>
        <li><strong>Layouts:</strong> Sugerencias para distintos formatos (vertical, cuadrado, panorámico).</li>
        <li><strong>Fotografía:</strong> Concepto, encuadre, iluminación y estilo de color.</li>
      </ul>
    `,
      imagen: './visual-carrusel.png',
    },
    {
      titulo: 'Estilo Verbal',
      descripcion: `
      <p>Ayuda a mantener una comunicación alineada y con personalidad:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Definición clara del tono:</strong> Cuándo tenemos que usar un tono formal, cercano o enérgico.</li>
        <li><strong>Frases en la práctica:</strong> Sugerencias de frases que sí y frases que no.</li>
      </ul>
    `,
      imagen: './verbal-carrusel.png',
    }
  ];

  ngOnInit(): void {}

  siguiente() {
    this.currentSlide = (this.currentSlide + 1) % this.pilares.length;
  }

  anterior() {
    this.currentSlide = (this.currentSlide - 1 + this.pilares.length) % this.pilares.length;
  }

  /*Modal para el pdf*/
  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}
