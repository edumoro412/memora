import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080';

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
