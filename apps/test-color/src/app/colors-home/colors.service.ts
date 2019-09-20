import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProxy } from '../shared/services/http.proxy.class';
import { environment } from '../../environments/environment.prod';

@Injectable()

export class ColorsService {

  private proxy: HttpProxy;

  constructor( private http: HttpClient ) {
    const serviceUri = environment.apiEndPoin;
    this.proxy = new HttpProxy(http, serviceUri);
  }

  public getColores<T>( page: number ): Observable<T> {
    const request = `?page=${page}`;
    return this.proxy.get<T>(environment.getColors, request);
  }

}
