import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { decreaseCounter, increaseCounter } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-vision',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css',
  standalone: true,
})
export class VisionComponent {
  counter$!: Observable<number>;
  count!: number;
  constructor(private store: Store<{ myCounter: number }>) {
    this.counter$ = store.select('myCounter');
    this.counter$.subscribe((newVal) => {
      this.count = newVal;
    });
  }

  increaseCounterVal(){
    this.store.dispatch(increaseCounter())
  }
  decreaseCounterVal(){
    this.store.dispatch(decreaseCounter())
  }
}
