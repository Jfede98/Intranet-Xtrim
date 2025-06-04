import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface PoliticaRaw {
  id: number;
  titulo: string;
  descripcion: string;
  enlace: string;
}

@Injectable({
  providedIn: 'root'
})
export class PoliticasService {
  private apiUrl = 'https://cms-intranet-dev.xtrim.com.ec/api/politicas';

  constructor(private http: HttpClient) {}

  obtenerPoliticas(): Observable<PoliticaRaw[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) =>
        response.data.map((item: any) => ({
          id: item.id,
          titulo: item.titulo,
          descripcion: item.descripcion,
          enlace: item.enlace,
        }))
      )
    );
  }
}
