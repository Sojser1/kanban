import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./foundation/pages/login-page/login-page.component";
import {RegistPageComponent} from "./foundation/pages/regist-page/regist-page.component";
import {AllBoardsPageComponent} from "./foundation/pages/all-boards-page/all-boards-page.component";
import {ErrorPageComponent} from "./foundation/pages/error-page/error-page.component";
import {HomePageComponent} from "./foundation/pages/home-page/home-page.component";
import {BoardPageComponent} from "./foundation/pages/board-page/board-page.component";


const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'board', component:BoardPageComponent},
  // {path: 'board/:id', component:BoardPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'reg', component:RegistPageComponent},
  {path:'boards', component:AllBoardsPageComponent},
  {path:'error', component:ErrorPageComponent},
  {path:'**', redirectTo:'error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
