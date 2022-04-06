import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly hostAPI = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.hostAPI}/Country/list`);
  }

  public getById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.hostAPI}/Country/${id}`);
  }

  public addCountry(data: any): Observable<any> {
    return this.http.post<any>(`${this.hostAPI}/Country/add`, data);
  }

  public updateCountry(data: any): Observable<any> {
    return this.http.put<any>(`${this.hostAPI}/Country/update`, data);
  }

  public deleteCountry(id: number) {
    return this.http.delete(`${this.hostAPI}/Country/del/${id}`);
  }
}
