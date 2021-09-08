import {Component, OnDestroy, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService, User} from "../../../services/auth.service";
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import {Subscription, SubscriptionLike} from "rxjs";
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy{

  form !: FormGroup;

  aSub: Subscription | null = null

  constructor(private authService: AuthService,
              private router: Router) { }



  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required, Validators.minLength(3)])
    })
  }

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
      this.form.disable()
      this.aSub = this.authService.login(this.form.value).subscribe(() => {
        this.router.navigate(['/'])
        },
        error => {
          console.warn(error)
          this.form.enable()
        })
  }
}
