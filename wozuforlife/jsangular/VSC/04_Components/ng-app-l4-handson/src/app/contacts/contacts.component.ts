import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  dataService: ContactsService;

  constructor(private contactsService:ContactsService) { 
    this.contacts = [];
    this.dataService = contactsService;
  }

  ngOnInit(): void {
    this.contacts = this.dataService.contacts;
  }

}
