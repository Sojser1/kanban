import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './foundation/header/header.component';
import { BoardPageComponent } from './foundation/pages/board-page/board-page.component';
import { LoginPageComponent } from './foundation/pages/login-page/login-page.component';
import { RegistPageComponent } from './foundation/pages/regist-page/regist-page.component';
import { FooterComponent } from './foundation/footer/footer.component';
import { BoardHeaderComponent } from './foundation/pages/board-page/board-header/board-header.component';
import { BoardBodyComponent } from './foundation/pages/board-page/board-body/board-body.component';
import {NewTodoComponent} from "./foundation/pages/board-page/board-body/new-todo/new-todo.component";
import {TodoComponent} from "./foundation/pages/board-page/board-body/todo/todo.component";
import {AppRoutingModule} from "./app-routing.module";
import { BodyComponent } from './foundation/body/body.component';
import { AllBoardsPageComponent } from './foundation/pages/all-boards-page/all-boards-page.component';
import { ErrorPageComponent } from './foundation/pages/error-page/error-page.component';
import { HomePageComponent } from './foundation/pages/home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import { LoaderComponent } from './foundation/pages/board-page/loader/loader.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { MatDialogModule} from "@angular/material/dialog";
import { TodoPopupComponent } from './foundation/pages/board-page/popups/todo-popup/todo-popup.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BoardPopupComponent } from './foundation/pages/board-page/popups/board-popup/board-popup.component';
import { MarkFilterPipe } from './pipes/mark-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardPageComponent,
    LoginPageComponent,
    RegistPageComponent,
    FooterComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    NewTodoComponent,
    TodoComponent,
    BodyComponent,
    AllBoardsPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    LoaderComponent,
    TodoPopupComponent,
    BoardPopupComponent,
    MarkFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
