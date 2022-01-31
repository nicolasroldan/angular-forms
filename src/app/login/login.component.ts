import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val = {
    email: 'nico@gmail.com',
    password: '123'
  };
  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, event) {
    console.log(loginForm.value);
  }
}
