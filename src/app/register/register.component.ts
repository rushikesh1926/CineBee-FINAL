import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref: { value: any; }){
    let dataobj=ref.value;
    console.log(dataobj);
  }

  onRegister(){
    this.router.navigateByUrl('/login')
  }
}
