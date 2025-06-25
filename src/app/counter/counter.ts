import { Component, inject } from '@angular/core';
import { CounterStore } from '../store/counter.store';

@Component({
  selector: 'app-counter',
  imports: [],
  providers:[CounterStore],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counterStore = inject(CounterStore);
}
