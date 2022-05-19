import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from './../todos.service';
import { PopupComponent } from './../../popup/popup.component';
import { HttpClient } from '@angular/common/http';
import { Todos } from './../../todos.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todos-update',
  templateUrl: './todos-update.component.html',
  styleUrls: ['./todos-update.component.css']
})
export class TodosUpdateComponent implements OnInit {

  todosOBJ: Todos = {
    title: '',
    completed: false,
  };

  closeResult: string = '';

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private http: HttpClient,
              private tdService: TodosService,
              private modalService: NgbModal) { }

  ngOnInit(): void {

       //get Obj
       let id = this.route.snapshot.paramMap.get("id");

      this.tdService.readById(id).subscribe((todos) => {
        this.todosOBJ = todos;
        console.log("GetById(id):~>", todos);
      });










      
  }


  updateTodos(): void {
  
    console.log('updateTodos->', this.todosOBJ);
    let id = this.route.snapshot.paramMap.get("id");

    this.tdService.update(this.todosOBJ).subscribe(
      (todos) => {
        alert("atualizado com sucesso!!");
      console.log('Update:', todos);
    });
  }

  cancel(): void {
    this.router.navigate(["/requestapi"]);
  }



  open(content:any): void {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      //Save data Modal:
      let id = this.route.snapshot.paramMap.get("id");

      this.tdService.delete(id).subscribe(
        (todos) => {
          alert("removido com sucesso!!");
        console.log('delete:', todos);
        this.router.navigate(["/requestapi"]);
      });
      
    }, (reason) => {
      //Exist Modal:
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }




  

}
