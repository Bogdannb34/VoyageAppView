import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/models/Ship';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  readonly hostAPI = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(`${this.hostAPI}/Ship/list`);
  }

  public getById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`${this.hostAPI}/Ship/${id}`);
  }

  public addShip(data: any): Observable<any> {
    return this.http.post<any>(`${this.hostAPI}/Ship/add`, data);
  }

  public updateShip(data: any): Observable<any> {
    return this.http.put<any>(`${this.hostAPI}/Ship/update`, data);
  }

  public deleteShip(id: number) {
    return this.http.delete(`${this.hostAPI}/Ship/del/${id}`);
  }
}
