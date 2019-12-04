import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from './client';


@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  userUrl = 'https://customer-mgt-app.herokuapp.com/v1/api/clients'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(this.userUrl)
  }
}
