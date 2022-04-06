import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/models/Voyage';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  readonly hostAPI = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.hostAPI}/Voyage/list`);
  }

  public getById(id: number): Observable<Voyage> {
    return this.http.get<Voyage>(`${this.hostAPI}/Voyage/${id}`);
  }

  public addVoyage(data: any): Observable<any> {
    return this.http.post<any>(`${this.hostAPI}/Voyage/add`, data);
  }

  public updateVoyage(data: any): Observable<any> {
    return this.http.put<any>(`${this.hostAPI}/Voyage/update`, data);
  }

  public deleteVoyage(id: number) {
    return this.http.delete(`${this.hostAPI}/Voyage/del/${id}`);
  }
}
