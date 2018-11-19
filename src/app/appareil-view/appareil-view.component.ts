import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

    appareils: any[];
    appareilSubscribtion: Subscription;

    isAuth = false;
    //on crée un délai pour tester le pipe async
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });


    constructor(private appareilService: AppareilService ) {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }
    ngOnInit() {
        this.appareilSubscribtion = this.appareilService.appareilSubject.subscribe(
            (appareil: any[]) => {
                this.appareils = appareil;
            }
        );
        this.appareilService.emitAppareilSubject();
    }
    onAllumer() {
        this.appareilService.switchOnAll();
    }
    onEteindre() {
        this.appareilService.switchOffAll();
    }
}
