import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-values',
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css',
})
export class ValuesComponent {
  counter!:Observable<number>
  constructor(private store:Store<{myCounter:number}>){
  this.counter=store.select('myCounter');
}


}
