import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInfor } from './event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly url = '//http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getEvent(): Observable<EventInfor[]> {
    return this.httpClient.get<EventInfor[]>(this.url);
  }
}
