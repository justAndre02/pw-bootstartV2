import { Route, Router, Routes, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from './../todos.service';
import { PopupComponent } from './../../popup/popup.component';
import { Todos } from './../../todos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css']
})
export class CreateTodosComponent implements OnInit {
  
  todosOBJ: Todos = {
    title: '',
    completed: false,
  };


  closeResult: string = '';

  constructor(private todostService: TodosService,
              private router: Router,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  createTodos(): void{

      this.todostService.create(this.todosOBJ).subscribe((todos) =>{
        this.todosOBJ = todos;
        console.log("Create:", this.todosOBJ);
        alert("Obj criado com sucesso!!!");
        this.router.navigate(["/requestapi"]);
      });

  }

  cancel(): void{
    this.router.navigate(["/requestapi"]);
  }

  

}
