import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from '../../components/calendario/calendario.component';

interface Evento {
  fecha: string;
  titulo: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,CalendarioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements AfterViewInit, OnInit {
  @ViewChild('sliderContent') sliderContent!: ElementRef;
  /*Parte mini carrusel cumpleaños*/
    selectedDate: Date = new Date();

    formattedDate: string = '';
  
    MONTHS: string[] = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  
  
    updateFormattedDate(): void {
      const day = this.selectedDate.getDate();
      const month = this.MONTHS[this.selectedDate.getMonth()];
      this.formattedDate = `${day} ${month}`;
    }
  
    // Si conectas con el calendario
    onDateSelected(date: Date) {
      this.selectedDate = date;
      this.updateFormattedDate();
    }

    /*Parte Xtrim te cuenta*/
    hoy: string = '19 May,2025';

    eventosSemana = [
      { fecha: this.hoy, titulo: 'Evento especial de hoy 1' },
      { fecha: '20 May,2025', titulo: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' },
      { fecha: '21 May,2025', titulo: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' },
      { fecha: '22 May,2025', titulo: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' },
    ];
  
    eventosHoy: Evento[] = [];
    eventosMostrados: Evento[] = [];
  
    tabActivo: 'semana' | 'hoy' = 'semana';
  
    ngOnInit(): void {
      this.eventosHoy = this.eventosSemana.filter(e => e.fecha === this.hoy);
      this.eventosMostrados = this.eventosSemana; // Inicial por defecto
      this.updateFormattedDate();
    }
  
    seleccionarTab(tab: 'semana' | 'hoy') {
      this.tabActivo = tab;
      this.eventosMostrados = tab === 'semana' ? this.eventosSemana : this.eventosHoy;
    }
  /*Parte del slider Nuestros Xtrimers*/
  currentSlide = 0;
  showModal = false;
  modalTitle = '';
  slideshowInterval: any;

  cards = [
    {
      title: 'Cumpleaños',
      description: '¡No olvides felicitar a nuestros cumpleañeros! Aquí puedes ver quiénes celebran este mes.'
    },
    {
      title: 'Movimientos e Ingresos',
      description: 'Conoce los nuevos ingresos, ascensos y cambios en nuestro equipo. ¡Felicitaciones a todos!'
    },
    {
      title: 'Mejor Vendedor',
      description: 'Destacamos a los mejores vendedores del mes. ¡Gracias por su esfuerzo y dedicación!'
    },
    {
      title: 'Aniversario',
      description: 'Celebramos a quienes cumplen más de 5 años con nosotros. ¡Gracias por su compromiso!'
    }
  ];

  ngAfterViewInit() {
    //this.startSlideshow();

    const slider = this.sliderContent.nativeElement as HTMLElement;

    // slider.addEventListener('mouseenter', () => this.stopSlideshow());
    // slider.addEventListener('mouseleave', () => {
    //   if (!this.showModal) {
    //     this.startSlideshow();
    //   }
    // });
  }

  nextSlide() {
    const totalSlides = this.cards.length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    this.updateSlider();
  }

  prevSlide() {
    const totalSlides = this.cards.length;
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
    this.updateSlider();
  }

  updateSlider() {
    const slider = this.sliderContent.nativeElement as HTMLElement;
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;
  }

  openModal(title: string) {
    this.modalTitle = title;
    this.showModal = true;
    //this.stopSlideshow(); 
  }

  closeModal() {
    this.showModal = false;
    //this.startSlideshow();
  }

  // startSlideshow() {
  //   this.stopSlideshow(); 
  //   this.slideshowInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 5000);
  // }

  // stopSlideshow() {
  //   if (this.slideshowInterval) {
  //     clearInterval(this.slideshowInterval);
  //     this.slideshowInterval = null;
  //   }
  // }
}


