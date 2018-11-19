import {Component, OnInit} from '@angular/core';
import {reject} from 'q';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

    appareils: any[];


    constructor(private appareilService: AppareilService ) {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }
    ngOnInit() {
        this.appareils = this.appareilService.appareils;
    }
    onAllumer() {
      this.appareilService.switchOnAll();
    }
    onEteindre() {
        this.appareilService.switchOffAll();
    }
}
