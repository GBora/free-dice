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
  public customSymbolicDice: CustomSymbolicDice[] = [];

  public nr_dice: number = 1;

  //Fudge dice
  public fudgeDice: CustomSymbolicDice = new CustomSymbolicDice('fudge', ['-', 'blank', '+']);
  public coinDice: CustomSymbolicDice =  new CustomSymbolicDice('coin', ['heads', 'tails']);

  //Modal fields
  public modalOpen: boolean = false;
  public modalMode: string = 'numeric';

  // Custom numric dice fields
  public custom_num_name: string = 'My D13';
  public custom_num_min: number = 1;
  public custom_num_max: number = 13;

  // Custom symbolic dice fields
  public custom_sym_name: string = 'My Symbolic Dice';
  public custom_sym_symbols: string = 'axe,staff,dagger';

  public ngOnInit() {
    if (localStorage.getItem('custom_numeric_dice')) {
      this.customNumberDice = JSON.parse(localStorage.getItem('custom_numeric_dice') || '[]');
    }

    if (localStorage.getItem('custom_symbolic_dice')) {
      this.customSymbolicDice = JSON.parse(localStorage.getItem('custom_symbolic_dice') || '[]');
    }
  }

  public setCategory(categoryName: string): void {
    this.openCategory = categoryName;
  }

  public rollDice(type: string): void {
    // Hate this
    let result: number = -9000;
    let max = Number.parseInt(type.substring(1), 10);
    let results_array: number[] = [];
    for (let i = 0; i < this.nr_dice; i++) {
      result = this.diceService.randomNumber(1, max);
      results_array.push(result);
    }

    if (result != -9000) {
      this.results.unshift(new DiceResult(type, results_array, this.nr_dice));
    }
  }

  private rollSymbolicDice(type: string): void {
    switch (type) {
      case 'Fudge': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.fudgeDice, this.nr_dice));
                    break;
      case 'Fudge4': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.fudgeDice, 4 * this.nr_dice));
                    break;
      case 'Coin': this.results.unshift(this.diceService.rollCustomSymbolicDice(this.coinDice, this.nr_dice));
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

  public createRandomSymbolic(): void {
    this.modalOpen = true;
    this.modalMode = 'symbolic';
    this.custom_sym_name = 'My Symbolic Dice';
    this.custom_sym_symbols = 'axe,staff,dagger';
  }

  public saveRandomNumeric(): void {
    this.modalOpen = false;
    this.customNumberDice.push(new CustomNumericDice(this.custom_num_min, this.custom_num_max, this.custom_num_name));
    localStorage.setItem('custom_numeric_dice', JSON.stringify(this.customNumberDice));
  }

  public saveRandomSymbolic(): void {
    this.modalOpen = false;
    let symbols: string[] = this.custom_sym_symbols.split(',');
    this.customSymbolicDice.push(
      new CustomSymbolicDice(this.custom_sym_name, symbols)
    );
    localStorage.setItem('custom_symbolic_dice', JSON.stringify(this.customSymbolicDice));
  }

  public deleteRandomNumeric(index: number): void {
    this.customNumberDice.splice(index, 1);
    localStorage.setItem('custom_numeric_dice', JSON.stringify(this.customNumberDice));
  }

  public deleteRandomSymbolic(index: number): void {
    this.customSymbolicDice.splice(index, 1);
    localStorage.setItem('custom_symbolic_dice', JSON.stringify(this.customSymbolicDice));
  }

  public rollRandomNumeric(index: number): void {
    this.results.unshift(this.diceService.rollCustomNumericDice(this.customNumberDice[index], this.nr_dice));
  }

  public rollRandomSymbolic(index: number): void {
    this.results.unshift(this.diceService.rollCustomSymbolicDice(this.customSymbolicDice[index], this.nr_dice));
  }

  public closeModal(): void {
    this.modalOpen = false;
  }
}