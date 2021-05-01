import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../modelos/usuario';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  private usuarioUrl = 'http://localhost:8080/ms-servicios/api/usuario/';  // URL to web api

  constructor(private http: HttpClient) { }

  guardarUsaurio(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.usuarioUrl + 'agregar', usuario, httpOptions);
    //  .pipe(
    //  tap((newUsuario: Usuario) => console.log(`added usuario w/ id=${usuario.numeroDeDocumento}`)),
    //  catchError(this.handleError<Usuario>('addUsuario'))
    //  );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
