import { Todos } from './../todos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseURL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  create(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.baseURL, todo);
  }

  read(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.baseURL);
  }

  readById(id: any): Observable<Todos> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Todos>(url);
  }

  update(todo: Todos): Observable<Todos> {
    const url = `${this.baseURL}/${todo.id}`;
    return this.http.put<Todos>(url, todo);
  }

  delete(id: any): Observable<Todos> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Todos>(url);
  }

  //-----

}
