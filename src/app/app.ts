import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  flag:boolean = true;

  toogle(){
    this.flag = !this.flag
  }
}
