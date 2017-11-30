import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms/';

@Component({
  selector: 'tm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
contact = {
  email: '',
  message: ''
};

showErrors(fieldRef: AbstractControl): boolean {
  return fieldRef.dirty && fieldRef.invalid;
}


  constructor() { }

  ngOnInit() {
  }

}
