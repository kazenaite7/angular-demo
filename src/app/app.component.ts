//skirta apsirasinet kintamiesiems, funkcijoms..

import { Component } from '@angular/core';
import { User } from './models/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my page!';
  isButtonPressed: boolean;

  users: User[] = [];

  user: User = {
    name: '',
    lastName: '',
    id: undefined,
  };

  showMe() {
    //console.log("funkcija veikia");
    this.isButtonPressed = !this.isButtonPressed;
  }

  addUser() {

  }
}
