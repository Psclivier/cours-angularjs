import {Component, OnInit, OnDestroy} from '@angular/core';
import {interval} from 'rxjs';
import {Subscription} from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    secondes: number;
    counterSubscription: Subscription;

    constructor() { }

    ngOnInit() {
        const counter = interval(1000);
        this.counterSubscription = counter.subscribe(
            (value: number) => {
                this.secondes = value;
            }
        );

    }

    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }
}
