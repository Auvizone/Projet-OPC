import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { rejects } from 'assert';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  secondes: number;
  counterSubscription: Subscription;

  constructor(private authService: AuthService) { }



  ngOnInit() {

      const observable = interval(1000);

      observable.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' + error);
      },
      () => {
        console.log('Obsevable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
