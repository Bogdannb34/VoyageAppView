import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Port } from 'src/app/models/Port';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  readonly hostAPI = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(`${this.hostAPI}/Port/list`);
  }

  public getById(id: number): Observable<Port> {
    return this.http.get<Port>(`${this.hostAPI}/Port/${id}`);
  }

  public addPort(data: any): Observable<any> {
    return this.http.post<any>(`${this.hostAPI}/Port/add`, data);
  }

  public updatePort(data: any): Observable<any> {
    return this.http.put<any>(`${this.hostAPI}/Port/update`, data);
  }

  public deletePort(id: number) {
    return this.http.delete(`${this.hostAPI}/Port/del/${id}`);
  }
}
