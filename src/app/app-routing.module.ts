import { CreateTodosComponent } from './components/request/create-todos/create-todos.component';
import { ApiTodosComponent } from './components/request/api-todos/api-todos.component';
import { LinkComponent } from './views/link/link.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosUpdateComponent } from './components/request/todos-update/todos-update.component';

const routes: Routes = [  {
  path: "",
  component: HomeComponent
},
{
  path: "link",
  component: LinkComponent
},
{
  path: "requestapi",
  component: ApiTodosComponent
},
{
  path: "todos/update/:id",
  component: TodosUpdateComponent
},
{
  path: "todos/create",
  component: CreateTodosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
