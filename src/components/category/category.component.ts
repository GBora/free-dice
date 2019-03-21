import { Component, Input } from '@angular/core';

@Component({
    selector: 'dice-category',
    templateUrl: 'components/category/category.html'
})
export class DiceCategoryComponent {
    @Input() index: number;
}