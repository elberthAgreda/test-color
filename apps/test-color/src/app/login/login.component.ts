import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test-color-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private router: Router ) { }

  onAuthentication(): void {
    this.router.navigate(['inicio']);
  }

  onRegister(): void {
    console.log('Pantalla de registro');
  }


}
