import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  contact = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })
  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit(){

      var a = this.contact.value;
      console.log(a)
    }
}
