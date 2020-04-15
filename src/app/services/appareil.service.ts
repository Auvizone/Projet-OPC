import { Injectable } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Toaster',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Ordi',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Bouilloire',
      status: 'éteint'
    },
    { id: 4,
      name: 'Four',
      status: 'allumé'
    }
  ];

  getAppareilByid(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

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
