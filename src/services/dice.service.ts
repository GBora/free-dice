import { CustomNumericDice } from './../models/customNumericDice.model';
import { CustomSymbolicDice } from './../models/customSymbolicDice.model';
import { DiceResult } from './../models/diceResult.model';

export class DiceService {
    public rollCustomSymbolicDice(dice: CustomSymbolicDice, numberOfRolls: number = 1): DiceResult {
        let index_array: number[] = [];
        let symbol_array: string[] = [];
        for (let i = 0;  i < numberOfRolls; i++) {
            let index: number = this.randomNumber(0, dice.symbols.length - 1);
            let symbol: string = dice.symbols[index];
            index_array.push(index);
            symbol_array.push(symbol);
        }

        let result: DiceResult = new DiceResult(dice.name, index_array, numberOfRolls, 0, false, symbol_array);
        return result;
    }

    public rollCustomNumericDice(dice: CustomNumericDice, numberOfRolls: number = 1): DiceResult {
        let num_array: number[] = [];
        let symbol_array: string[] = [];
        for (let i = 0;  i < numberOfRolls; i++) {
            let num = this.randomNumber(dice.min, dice.max);
            num_array.push(num);
            symbol_array.push(num.toString());
        }
        let result = new DiceResult(dice.name, num_array, numberOfRolls, 0, true, symbol_array);
        return result;
    }

    public randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}