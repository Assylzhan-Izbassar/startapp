import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private _url = environment.apiUrl + 'lead_generation/call_requests/';

  constructor(private http: HttpClient) {}

  postLead(data: any): Observable<any> {
    return this.http.post<Observable<any>>(this._url, data);
  }
}
