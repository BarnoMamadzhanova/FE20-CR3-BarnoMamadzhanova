import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { IMenu } from '../imenu';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  order: IMenu[] = [];
  total: number = 0;
  service: number = 0;
  discount: number = 0;
  totalLast: number = 0;
  
  info = new FormGroup({

    name: new FormControl('', Validators.required),
 
    address: new FormControl('', Validators.required),
 
    phone: new FormControl('', Validators.required),
 
  })
  

  constructor(private OS: OrderService) {}

  clearOrder() {
    alert('Your cart has been cleared');
    this.order = this.OS.clearOrder();
    this.info.reset();
  }

  onSubmit() {
    if(this.info.valid){
      console.warn('Your order has been submitted',
      this.info.value);
      this.order = this.OS.clearOrder();
      this.info.reset();
    }

  }

  ngOnInit(): void {
    this.order = this.OS.getOrder();
    this.total = this.OS.calcTotal();
    this.service = this.OS.calcService();
    this.discount = this.OS.calcDiscount();
    this.totalLast = this.OS.calcTotalLast();
  }

}
