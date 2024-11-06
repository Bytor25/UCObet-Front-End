import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from "rxjs";
import { state } from "../clases/state";

@Injectable({
    providedIn: 'root'
  })

  export class StateService {

    private url: string = "http://localhost:8081/generales/api/v1/states";

    constructor(private http: HttpClient) { }

    getStates(): Observable<any> {
        return this.http.get<{ datos: state[] }>(this.url).pipe(
          map(response => response.datos)
        );
      }

      private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          if (error.error && error.error.mensajes) {
            errorMessage = error.error.mensajes.join(', ');
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }
        return throwError({ mensajes: [errorMessage] });
      }
  }