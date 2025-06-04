import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PoliticasService } from '../../services/politicas.service';

interface Politica {
  id: number;
  titulo: string;
  descripcion: string;
  enlace: string;
}

@Component({
  selector: 'app-politicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {
  documentos: Politica[] = [];
  documentosPorPagina = 5;
  paginaActual = 1;

  modalAbierto = false;
  pdfTitulo = '';
  pdfRuta!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private politicasService: PoliticasService
  ) {}

  ngOnInit(): void {
    this.politicasService.obtenerPoliticas().subscribe((docs) => {
      this.documentos = docs;
    });
  }

  get documentosPagina() {
    const inicio = (this.paginaActual - 1) * this.documentosPorPagina;
    return this.documentos.slice(inicio, inicio + this.documentosPorPagina);
  }

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

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  totalPaginas() {
    return Math.ceil(this.documentos.length / this.documentosPorPagina);
  }
}
