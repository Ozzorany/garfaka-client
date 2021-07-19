import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private modelUrl = 'http://10.28.143.102:5000';

  constructor(private http: HttpClient) {
  }

  sendMessage(text: string): Observable<string> {
    return this.http.post<string>(this.modelUrl, {data: text});
  }
}
