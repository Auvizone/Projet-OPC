import { Component, Input, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isAuth = false;

  appareils: any[];

  lastUpdate = new Promise((resolve, rejects) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
   

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

 

  onAllumer() {
    this.appareilService.switchOnAll();
    console.log('tout allumer')
  };

  onEteindre() {
    if(confirm('Etes vous sur de vouloir eteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
}
