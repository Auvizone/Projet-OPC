import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      name: 'Toaster',
      status: 'éteint'
    },
    {
      name: 'Ordi',
      status: 'allumé',
    },
    {
      name: 'Bouilloire',
      status: 'éteint'
    }
  ];

  ngOnInit() {

  }
  
  constructor() { }
}
