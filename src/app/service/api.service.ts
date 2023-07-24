import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs';

export interface IListItem {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList() {
    // Эмулируем плохую сеть
    return this.http.get<IListItem[]>('http://jsonplaceholder.typicode.com/posts').pipe(delay(3000))
  }
}
