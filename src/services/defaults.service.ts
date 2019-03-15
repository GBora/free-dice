import { CustomNumericDice } from './../models/customNumericDice.model';

export class DefaultsService {
    public getDefaultNumericDice(): CustomNumericDice[] {
        let dice: CustomNumericDice[] = [];
        dice.push(new CustomNumericDice(1, 4, 'd4'));
        dice.push(new CustomNumericDice(1, 6, 'd6'));
        dice.push(new CustomNumericDice(1, 8, 'd8'));
        dice.push(new CustomNumericDice(1, 10, 'd10'));
        dice.push(new CustomNumericDice(1, 12, 'd12'));
        dice.push(new CustomNumericDice(1, 20, 'd20'));
        dice.push(new CustomNumericDice(1, 2, 'd2'));
        dice.push(new CustomNumericDice(1, 3, 'd3'));
        dice.push(new CustomNumericDice(1, 5, 'd5'));
        dice.push(new CustomNumericDice(1, 7, 'd7'));
        dice.push(new CustomNumericDice(1, 14, 'd14'));
        dice.push(new CustomNumericDice(1, 16, 'd16'));
        dice.push(new CustomNumericDice(1, 24, 'd24'));
        dice.push(new CustomNumericDice(1, 30, 'd30'));
        dice.push(new CustomNumericDice(1, 100, 'd100'));
        return dice;
    }
}