import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './foundation/header/header.component';
import { BoardComponent } from './foundation/pages/board-page/board.component';
import { LoginPageComponent } from './foundation/pages/login-page/login-page.component';
import { RegistPageComponent } from './foundation/pages/regist-page/regist-page.component';
import { FooterComponent } from './foundation/footer/footer.component';
import { MainHeaderComponent } from './foundation/pages/board-page/board-header/main-header.component';
import { BoardBodyComponent } from './foundation/pages/board-page/board-body/board-body.component';
import { BoardBodyColComponent } from './foundation/pages/board-page/board-body/board-body-col/board-body-col.component';
import {NewTodoComponent} from "./foundation/pages/board-page/board-body/board-body-col/new-todo/new-todo.component";
import {TodoComponent} from "./foundation/pages/board-page/board-body/board-body-col/todo/todo.component";
import {AppRoutingModule} from "./app-routing.module";
import { BodyComponent } from './foundation/body/body.component';
import { AllBoardsPageComponent } from './foundation/pages/all-boards-page/all-boards-page.component';
import { ErrorPageComponent } from './foundation/pages/error-page/error-page.component';
import { HomePageComponent } from './foundation/pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    LoginPageComponent,
    RegistPageComponent,
    FooterComponent,
    MainHeaderComponent,
    BoardBodyComponent,
    BoardBodyColComponent,
    NewTodoComponent,
    TodoComponent,
    BodyComponent,
    AllBoardsPageComponent,
    ErrorPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
