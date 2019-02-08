import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { DiceResult } from '../models/diceResult.model';

@Component({
  selector: 'App',
  templateUrl: 'component/component.html'
})
export class AppComponent {

  public results: DiceResult[] = [];
  public openCategory: string = 'dnd';

  public setCategory(categoryName: string): void {
    this.openCategory = categoryName;
  }

  public rollDice(type: string): void {
    // Hate this
    let result: number = -9000;

    switch (type) {
      case 'd2': result = this.randomNumber(1, 2); break;
      case 'd4': result = this.randomNumber(1, 4); break;
      case 'd6': result = this.randomNumber(1, 6); break;
      case 'd8': result = this.randomNumber(1, 8); break;
      case 'd10': result = this.randomNumber(1, 10); break;
      case 'd12': result = this.randomNumber(1, 12); break;
      case 'd20': result = this.randomNumber(1, 20); break;
      case 'd100': result = this.randomNumber(1, 100); break;
      default: console.warn('Invalid dice type ', type);
    }

    if (result != -9000) {
      this.results.unshift(new DiceResult(type, result));
    }
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }