import { DiceResult } from './../../models/diceResult.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'result-row',
    templateUrl: 'components/result/result.html'
})
export class ResultComponent {
    @Input() result: DiceResult;
    @Input() index: number;
}