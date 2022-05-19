import { Router } from '@angular/router';
import { TodosService } from './../todos.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todos } from '../../todos.model';

@Component({
  selector: 'app-api-todos',
  templateUrl: './api-todos.component.html',
  styleUrls: ['./api-todos.component.css']
})
export class ApiTodosComponent implements OnInit {

  todos: Todos[] = [];

  constructor(
      private todostService: TodosService,
      private router: Router) { }

  ngOnInit(): void {

    this.todostService.read().subscribe((todos) =>{
      this.todos = todos;
      console.log("todos:", todos);
    });
  }

  Goto(): void{
    this.router.navigate(["/todos/create"]);
  }
}
