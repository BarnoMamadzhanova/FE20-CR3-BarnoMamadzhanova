import { Component, OnInit } from '@angular/core';
import { IMenu } from '../imenu';
import { ActivatedRoute, Params } from '@angular/router';
import { menuProducts } from '../menu';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit{
  menu : IMenu = {} as IMenu;
  id: number = 0;

  constructor(private route: ActivatedRoute, private OS: OrderService) {}

  addToOrder() {
    alert('Item added');
    this.OS.addToOrder(this.menu);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.menu = menuProducts[this.id];
    })
  }

}
