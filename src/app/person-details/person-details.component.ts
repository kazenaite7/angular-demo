import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person-details ,[app-person-details]',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person;
  @Output() deletePerson = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  personDeletion() {
    this.deletePerson.emit(true);
  }

}
