import { Injectable } from '@angular/core';
import { IMenu } from './imenu';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: IMenu[] = [];

  constructor() { }

  addToOrder(obj: IMenu) {
    this.order.push(obj);
  }

  getOrder() {
    return this.order;
  }
  calcTotal() {
    let total: number = 0;

    this.order.forEach((value) => {
      total += value.price;
    })
    return total;
  }
  calcService() {
    let service: number = 0;
    let total: number = 0;

    this.order.forEach((value) => {
      total += value.price;
      service = total*0.1;
    })
    return service;
  }

  calcDiscount() {
    let service: number = 0;
    let total: number = 0;
    let discount: number = 0;

    this.order.forEach((value) => {
      total += value.price;
      service = Math.round(total*0.1);
      if(total+service >= 40) {
        discount = Math.round((total + service)*0.15);
      } 
    })
    return discount;
  }

  calcTotalLast() {
    let total: number = 0;
    let service: number = 0;
    let discount: number = 0;
    let totalLast: number = 0;

    this.order.forEach((value) => {
      total += value.price;
      service = total*0.1;
      if(total+service >= 40) {
        discount = Math.floor((total + service)*0.15);
      } 
      totalLast = total + service - discount;
    })
    return totalLast;
  }

  clearOrder() {
    this.order = [];
    return this.order;
  }
}
