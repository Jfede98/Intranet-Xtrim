import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  eventos = [
    { fecha: '1986', texto: 'Se funda TVCABLE, iniciando la instalación de cable y aerocable en el país.' },
    { fecha: '1990', texto: 'Comienza la operación comercial, llevando lo último en TV mundial a varias ciudades.' },
    { fecha: '2005', texto: 'Rápida expansión en Quito, Guayaquil, Cuenca, Loja, Ambato, entre otras.' },
    { fecha: '2021', texto: 'Cambio de marca de TVcable a Xtrim TVcable para cambiar la imagen de la empresa.' },
    { fecha: '2023', texto: 'La marca evoluciona de Xtrim TVCable a Xtrim®, consolidando su identidad moderna.' }
  ];

  mostrarEventos: boolean[] = [];

  ngOnInit() {
    this.mostrarEventos = Array(this.eventos.length).fill(false);
    this.animarEventos();
  }

  animarEventos() {
    this.eventos.forEach((_, i) => {
      setTimeout(() => {
        this.mostrarEventos[i] = true;
      }, i * 250); 
    });
  }
}
