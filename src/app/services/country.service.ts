import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from "rxjs";
import { country } from "../clases/country";

@Injectable({
    providedIn: 'root'
  })

  export class CountryService {
    private url: string = "https://localhost:8080/generales/api/v1/countries";

    constructor(private http: HttpClient) { }

    getCountry(): Observable<any> {
        return this.http.get<{ datos: country[] }>(this.url).pipe(
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
