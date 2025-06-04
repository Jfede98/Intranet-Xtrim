import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-valores-corpo',
  imports: [CommonModule],
  templateUrl: './valores-corpo.component.html',
  styleUrl: './valores-corpo.component.css'
})
export class ValoresCorpoComponent {
  valores = [
    {
      titulo: 'Honestidad Intelectual',
      descripcion: `Actuar con integridad profesional y dedicación para alcanzar la excelencia en todas las actividades. Tener predisposición constante para aprender y compartir conocimientos con la compañía, realizando las tareas de manera eficiente y siempre buscando ir más allá.`,
      imagen: './honestidad.png'
    },
    {
      titulo: 'Liderazgo de Valor Agregado',
      descripcion: `Liderar con el ejemplo, brindando apoyo y oportunidades para el crecimiento profesional de todos, fomentando un ambiente de confianza y respeto mutuo, donde los miembros del equipo se sientan valorados, motivados y libres de expresar sus ideas.`,
      imagen: './liderazgo.png'
    },
    {
      titulo: 'Cultura de Dueño',
      descripcion: `Adoptar un enfoque proactivo y orientado a soluciones, tomando decisiones a favor de la compañía. Para actuar con total pertenencia independientemente del cargo jerárquico, enfrentando desafíos como si todo lo construido fuera nuestro.`,
      imagen: './cultura.png'
    }
  ];
}
