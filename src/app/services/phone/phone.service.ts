import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }
  getAll():String[]{
    return[
      '/assets/images/phone/phone-1.jpg',
      '/assets/images/phone/phone-2.jpg',
      '/assets/images/phone/phone-3.jpg',
      '/assets/images/phone/phone-4.jpg',
      '/assets/images/phone/phone-5.jpg',
      '/assets/images/phone/phone-6.jpg',
      '/assets/images/phone/phone-7.jpg',
      '/assets/images/phone/phone-8.jpg',
      '/assets/images/phone/phone-9.jpg',
      '/assets/images/phone/phone-10.jpg',
    ]
  }
}
