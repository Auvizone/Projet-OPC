import { Component, Input, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
