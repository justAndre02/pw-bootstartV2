import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LinkComponent } from './views/link/link.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ApiTodosComponent } from './components/request/api-todos/api-todos.component';

import { HttpClientModule } from '@angular/common/http';
import { TodosUpdateComponent } from './components/request/todos-update/todos-update.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './components/popup/popup.component';
import { CreateTodosComponent } from './components/request/create-todos/create-todos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    NavComponent,
    FooterComponent,
    ApiTodosComponent,
    TodosUpdateComponent,
    PopupComponent,
    CreateTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
