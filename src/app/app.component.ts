import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kanban';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const potentianToken = localStorage.getItem('auth-token')
    if (potentianToken) {
      this.authService.setToken(potentianToken)
    }
  }
}
