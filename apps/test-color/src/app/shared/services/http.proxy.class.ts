import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpProxy {

    private url: string;

    constructor( private http: HttpClient, private endpoint: string ) {
        this.url = endpoint;
    }

    /** @description Metodo que permite Obtener datos por POST */
    public post<T>( service: string, request: any ): Observable<T> {
        const postHeaders = this.getHeaders();
        return this.http.post<T>( this.url + service, request, postHeaders );
    }

    /** @description Metodo que permite Obtener datos por PUT */
    public put<T>( service: string, request: any ): Observable<T> {
        const putHeaders = this.getHeaders();
        return this.http.put<T>( this.url + service, request, putHeaders );
    }

    /** @description Metodo que permite Obtener datos por GET con parametros */
    public get<T>( service: string, queryParam: string ): Observable<T> {
        const params = new HttpParams({ fromString: queryParam });
        return this.http.get<T>(this.url + service + params, this.getHeaders());
    }
   
    /** @description Metodo que permite agregar cabeceras a la peticion */
    private getHeaders( ) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return {headers};
    }


}
