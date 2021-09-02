import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistPageComponent } from './regist-page/regist-page.component';
import { FooterComponent } from './footer/footer.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';
import { MainBodyComponent } from './main/main-body/main-body.component';
import { MainBodyColComponent } from './main/main-body/main-body-col/main-body-col.component';
import {NewTodoComponent} from "./main/main-body/main-body-col/new-todo/new-todo.component";
import {TodoComponent} from "./main/main-body/main-body-col/todo/todo.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginPageComponent,
    RegistPageComponent,
    FooterComponent,
    MainHeaderComponent,
    MainBodyComponent,
    MainBodyColComponent,
    NewTodoComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
