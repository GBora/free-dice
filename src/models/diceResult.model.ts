export class DiceResult {
    type: string;
    result: number[];
    nrOfDices: number;
    modifier: number;
    isNumeric: boolean;
    resultLabel: string[];

    constructor(type: string, result: number[], nrOfDices: number = 1, 
                modifier: number = 0, isNumeric = true,
                resultLabel = ['Default Label']) {
        this.type = type;
        this.result = result;
        this.nrOfDices = nrOfDices;
        this.modifier = modifier;
        this.isNumeric = isNumeric;
        this.resultLabel = resultLabel;
    }
}