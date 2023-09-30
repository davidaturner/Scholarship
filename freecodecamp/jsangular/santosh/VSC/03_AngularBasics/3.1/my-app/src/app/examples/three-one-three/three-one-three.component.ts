import { Component, OnInit } from '@angular/core';
import { Rooms, Photo, RoomListing } from './rooms';

@Component({
  selector: 'app-three-one-three',
  templateUrl: './three-one-three.component.html',
  styleUrls: ['./three-one-three.component.css']
})
export class ThreeOneThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hotelName: string = "Heartbreak Hotel";

  rooms : Rooms = {
    numberAvailable: 5, 
    numberBooked: 15, 
    totalNumber: 20 
  };
  // rooms : Rooms = {
  // };

  roomListing : RoomListing[] = [
    {
      roomNumber: 1,
      roomType : "Suite",
      amenities: ['Air Conditioner', 'Free WiFi', 'Color Tv', 'Bar'],
      price: 112.00,
      photos: [
        {
          imgLink: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy&auto=format&fit=crop&w=400&q=60',
          placeholder: 'Poggett Room', 
          imgLabel: 'The Poggett Room'
        } 
      ],
      checkInTime: new Date('12-Aug-2023'),
      checkOutTime: undefined
    },
    {
      roomNumber: 2,
      roomType : "Suite",
      amenities: ['Air Conditioner', 'Free WiFi', 'Color Tv', 'Bar'],
      price: 112.00,
      photos: [
        {
          imgLink: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy&auto=format&fit=crop&w=400&q=60',
          placeholder: 'Poggett Room', 
          imgLabel: 'The Poggett Room'
        } 
      ],
      checkInTime: new Date('12-Aug-2023'),
      checkOutTime: undefined
    },
    {
      roomNumber: 3,
      roomType : "Suite",
      amenities: ['Air Conditioner', 'Free WiFi', 'Color Tv', 'Bar'],
      price: 112.00,
      photos: [
        {
          imgLink: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHwy&auto=format&fit=crop&w=400&q=60',
          placeholder: 'Poggett Room', 
          imgLabel: 'The Poggett Room'
        } 
      ],
      checkInTime: new Date('12-Aug-2023'),
      checkOutTime: undefined
    }
  ]

  hideRooms : string = '';

  consolelog(): void {
    //  console.log(this.rooms);
    console.log(this.roomListing);
    // for(let i=0; i<this.roomListing.length;i++) {
    //   console.log(this.roomListing[i]);
    // }
    // for (let room in this.roomListing) {
    //   var i = parseInt(room);
    //   console.log(this.roomListing[i]);
    // }
    for (let room of this.roomListing) {
      console.log(room);
    }
  }

  toggleRooms() {
    this.hideRooms = (this.hideRooms == '')?'hidden':'';
  }

}

