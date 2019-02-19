import {Component, OnInit} from '@angular/core';
import {Person} from '../models/person';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personsList: Person[] = [];

  constructor() {
  }


  ngOnInit() {
    this.personsList = [{
      pid: 1,
      name: 'Jonas',
      surname: 'Jonaitis',
    },
      {
        pid: 2,
        name: 'Petras',
        surname: 'Petraitis',
        phone: '655454',
        email: 'kdjkasj@aksk'
      },
      {
        pid: 3,
        name: 'Jonas',
        surname: 'Petraitis',
        groups: ['a grupe', 'b grupe'],
      }
    ];

  }

  deletePerson($event, person) {
    if (event){
      this.personsList.splice(this.personsList.indexOf(person),1);
    }

  }

}
