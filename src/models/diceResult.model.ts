export class DiceResult {
    type: string;
    result: number;
    nrOfDices: number;
    modifier: number;

    constructor(type: string, result: number, nrOfDices: number = 1, modifier: number = 0) {
        this.type = type;
        this.result = result;
        this.nrOfDices = nrOfDices;
        this.modifier = modifier;
    }
}