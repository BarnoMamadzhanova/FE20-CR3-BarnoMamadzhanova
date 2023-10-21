import { Component, OnInit } from '@angular/core';
import { IMenu } from '../imenu';
import { menuProducts } from '../menu';
import { OrderService } from '../order.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit{
  menuArr : IMenu[] = menuProducts;
  menu: IMenu = {} as IMenu;
  id: number = 0;

  constructor(private OS: OrderService, private route: ActivatedRoute)  {}

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
