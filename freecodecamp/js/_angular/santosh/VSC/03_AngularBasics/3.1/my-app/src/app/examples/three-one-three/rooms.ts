// export interface Rooms {
//     totalNumber: number;
//     numberAvailable: number;
//     numberBooked: number;
// }
export interface Rooms {
    totalNumber?: number;
    numberAvailable?: number;
    numberBooked?: number;
}

export interface Photo {
    imgLink : string;
    placeholder : string;
    imgLabel : string;
}

export interface RoomListing {
    roomNumber : number;
    roomType: string;
    amenities: string[];
    price: number;
    photos: Photo[];
    checkInTime?: Date;
    checkOutTime?: Date;
}