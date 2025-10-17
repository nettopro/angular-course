import { Component } from '@angular/core';

@Component({
  selector: 'button[appArrowButton], a[appButton]',
  //Can have several selectors, wasn't necessary in this case
  //But just for demonstration also added an anchor.
  standalone: true,
  imports: [],
  templateUrl: './arrow-button.component.html',
  styleUrl: './arrow-button.component.css'
})
export class ArrowButtonComponent {

}
