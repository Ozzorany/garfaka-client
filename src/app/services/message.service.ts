import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MessageService {
  private modelUrl = 'https://server-for-garfucka.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  sendMessage(text: string): Observable<string> {
    return this.http.post<string>(this.modelUrl, {data: text});
  }
}
