import { CustomNumericDice } from './../models/customNumericDice.model';
import { CustomSymbolicDice } from './../models/customSymbolicDice.model';
import { DiceResult } from './../models/diceResult.model';

export class DiceService {
    public rollCustomSymbolicDice(dice: CustomSymbolicDice): DiceResult {
        let index: number = this.randomNumber(0, dice.symbols.length - 1);
        let symbol: string = dice.symbols[index];
        let result: DiceResult = new DiceResult(dice.name, index, 1, 0, false, symbol);
        return result;
    }

    public rollCustomNumericDice(dice: CustomNumericDice): DiceResult {
        let num = this.randomNumber(dice.min, dice.max);
        let result = new DiceResult(dice.name, num, 1, 0, true, num.toString());
        return result;
    }

    public randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}