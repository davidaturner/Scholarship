import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
// Alfred Planter, 234-345-4567, alfredtheplanter@gmail.com
// Brandon Beck, 293-482-2342, brandon.beck@yahoo.com
// Daisy Harvey, 839-283-4583, daisyharvey22@gmail.com
// Patrick Wilson, 283-472-3891, patrickwilson19@yahoo.com
  contacts: Contact[] = [
    {
      firstName : 'Alfred',
      lastName : 'Planter',
      phoneNumber : '234-345-4567',
      email: 'alfredtheplanter@gmail.com'
    },
    {
      firstName: 'Brandon',
      lastName: 'Beck',
      phoneNumber: '839-283-4583',
      email: 'brandon.beck@yahoo.com'
    },
    {
      firstName: 'Daisy',
      lastName: 'Harvey',
      phoneNumber: '839-283-4583',
      email: 'daisyharvey22@gmail.com'
    },
    {
      firstName: 'Patrick',
      lastName: 'Wilson',
      phoneNumber: '283-472-3891',
      email: 'patrickwilson19@yahoo.com'
    }
  ]

  constructor() { }
}
