import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-regist-page',
  templateUrl: './regist-page.component.html',
  styleUrls: ['./regist-page.component.scss']
})
export class RegistPageComponent implements OnInit {

  form !: FormGroup;

  aSub: Subscription | null = null

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this.form.disable()
    this.authService.reg(this.form.value).subscribe(
      ()=>{
        this.router.navigate(['/'])
      },
      (error)=>{
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
