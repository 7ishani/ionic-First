import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'Your Details',
    
  };
  

  constructor(private router: Router, private dataService: DataService) { }
 
  submit() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
    

      }
    };
    this.router.navigate(['details'], navigationExtras);
    
  }

}
