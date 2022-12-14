import { Component, Input } from '@angular/core';

@Component({
  selector: 'recursive-component',
  templateUrl: './recursive-component.html',
})
export class RecursiveComponent {
  @Input() item: any;
  @Input() index: number = 0;
}
