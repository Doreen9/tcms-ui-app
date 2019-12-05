import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class PostuserService {
userUrl = 'http://customer-mgt-app.herokuapp.com/v1/api/client'
  constructor(private http: HttpClient) { }

  createUser(userObject): Observable<Client[]> {
    return this.http.post<Client[]>(this.userUrl, userObject)
  }
}
