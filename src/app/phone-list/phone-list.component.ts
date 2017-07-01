import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: Object[];
  errorMessage: String = '';

  constructor( private myPhoneService: PhoneService ) { }

  ngOnInit() {
    this.myPhoneService.getList()
    .then((phonesList) => {
      this.phones = phonesList;
    })
    .catch((err) => {
        this.errorMessage = 'Could not retrieve phone details. Try Again later.';
    });
  }

}
