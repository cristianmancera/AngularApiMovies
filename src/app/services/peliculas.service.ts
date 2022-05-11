import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, of, catchError } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { CreditsReponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: Boolean = false;

  constructor(private http: HttpClient) {

  }
  resetCarteleraPage() {
    this.carteleraPage = 1;
  }
  get params() {
    return {
      api_key: '989a68a23b99ed5524358c0d1054a1dc',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  getCartelera(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.url}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {

        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }

  getPeliculaDetalle(id: string) {
    return this.http.get<MovieResponse>(`${this.url}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: string) {
    return this.http.get<CreditsReponse>(`${this.url}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    );
  }

  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = { ...this.params, page: "1", query: texto };

    return this.http.get<CarteleraResponse>(`${this.url}/search/movie`, { params }).pipe(map(resp => resp.results),)
  }
}
