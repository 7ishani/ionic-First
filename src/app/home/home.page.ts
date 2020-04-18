import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  
  private username:string;
  
  constructor(private router: Router, private dataService: DataService) {
    
   }
  
  submit() {
    console.log("msg : "+this.username);
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.username 
      }
    };

    this.router.navigate(['details'], navigationExtras);
   
  }

}
