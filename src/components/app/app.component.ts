import { CustomSymbolicDice } from './../../models/customSymbolicDice.model';
import { Component, OnInit } from '@angular/core';
import { DiceResult } from '../../models/diceResult.model';
import { CustomNumericDice } from '../../models/customNumericDice.model';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'App',
  templateUrl: 'components/app/app.html'
})
export class AppComponent implements OnInit {

  public results: DiceResult[] = [];
  public diceService = new DiceService();
  public openCategory: string = 'dnd';
  public customNumberDice: CustomNumericDice[] = [];

  //Fudge dice
  public fudgeDice: CustomSymbolicDice = new CustomSymbolicDice('fudge', ['-', 'blank', '+']);
  public coinDice: CustomSymbolicDice =  new CustomSymbolicDice('coin', ['heads', 'tails']);

  //Modal fields
  public modalOpen: boolean = false;
  public modalMode: string = 'numeric';

  // Custom numric dice field
  public custom_num_name: string = 'My D13';
  public custom_num_min: number = 1;
  public custom_num_max: number = 13;

  public ngOnInit() {
    if (localStorage.getItem('custom_numeric_dice')) {
      this.customNumberDice = JSON.parse(localStorage.getItem('custom_numeric_dice') || '[]');
    }
  }

  public setCategory(categoryName: string): void {
    this.openCategory = categoryName;
  }

  public rollDice(type: string): void {
    // Hate this
    let result: number = -9000;
    let max = Number.parseInt(type.substring(1), 10);
    result = result = this.diceService.randomNumber(1, max);

    if (result != -9000) {
      this.results.unshift(new DiceResult(type, [result]));
    }
  }

  private rollSymbolicDice(type: string): void {
    switch (type) {
      case 'Fudge': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.fudgeDice));
                    break;
      case 'Fudge4': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.fudgeDice, 4));
                    break;
      case 'Coin': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.coinDice));
                    break;
      default: console.warn('Invalid dice type ', type);
    }
  }

  public createRandomNumeric(): void {
    this.modalOpen = true;
    this.modalMode = 'numeric';
    this.custom_num_name = 'My D7';
    this.custom_num_min = 1;
    this.custom_num_max = 7;
  }

  public saveRandomNumeric(): void {
    this.modalOpen = false;
    this.customNumberDice.push(new CustomNumericDice(this.custom_num_min, this.custom_num_max, this.custom_num_name));
    localStorage.setItem('custom_numeric_dice', JSON.stringify(this.customNumberDice));
  }

  public rollRandomNumeric(index: number): void {
    this.results.unshift(this.diceService.rollCustomNumericDice(this.customNumberDice[index]));
  }

  public closeModal(): void {
    this.modalOpen = false;
  }
}