import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  logged: boolean = false;
  registerMode: boolean = false;
  password: string = ""
  username: string = ""

  name: string = ""


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
  }

  

  submit() {
    if (this.registerMode) {
      this.password = this.password.trim();
      this.username = this.username.trim();
      if (!(this.username && this.password)) {
        window.alert('Email, password and username shouldn\'t be empty!');
        return;
      }
      this.authService.signUp(this.username, this.password)
        .subscribe((data) => {
          if (data.token == undefined) {
            return;
          }
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', this.username);
          localStorage.setItem('id', (data.user).toString());
          localStorage.setItem('role', data.role);
          this.username = '';
          this.password = '';
          this.logged = true;
        }, error => {
          window.alert('Registration wasn\'t accomplished, please register again!');
        });


    } else {
      this.password = this.password.trim();
      this.username = this.username.trim();
      if (!(this.username && this.password)) {
        window.alert('Password and username shouldn\'t be empty!');
        return;
      }
      this.authService.signIn(this.username,this.password).subscribe((data)=>{
          if (data.token == undefined) {
            window.alert('Invalid credentials!');
            return;
          }
          // console.log(data)
          localStorage.setItem('username', this.username);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', (data.user).toString());
          localStorage.setItem('role', data.role);
          this.username = '';
          this.password = '';
          this.logged = true;
        },
        error => {
          window.alert('Invalid credentials!');
        }
        
      );
      
    }
  }


  logout(): void {
    localStorage.clear();
    this.logged = false;
  }

}
