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
    },
    {
      name: 'Four',
      status: 'allumé'
    }
  ];

  switchOnAll() {

    this.appareils.map(appareil => {
      appareil.status = 'allumé';
    })

    // for(let appareil of this.appareils) {
    //   console.log('tout allumer');
    //   appareil.status = 'allumé';
    // }
  };

  switchOffAll() {

    this.appareils.map(appareil => {
      appareil.status = 'éteint';
    })

    // for(let appareil of this.appareils) {
    //   appareil.status = 'éteint';
    // }
  };

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i:number) {
    this.appareils[i].status =' éteint';
  }

  ngOnInit() {

  }

  constructor() { }
}
