export class CustomNumericDice {
	min: number;
	max: number;
	name: string;

	constructor(min: number, max: number, name: string) {
		this.min = min;
		this.max = max;
		this.name = name;
	}
}