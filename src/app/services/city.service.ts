import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from "rxjs";
import { cty } from "../clases/city";

@Injectable({
    providedIn: 'root'
  })
  export class CityService {
    private url: string = "https://ucobetmanagement.azure-api.net/v1/generales/api/v1/cities";

    constructor(private http: HttpClient) { }

    create(city: any): Observable<any> {
        return this.http.post<cty>(this.url, city);
      }

    getCity(): Observable<any> {
        return this.http.get<{ datos: cty[]}>(this.url).pipe(
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