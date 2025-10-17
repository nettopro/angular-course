import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //The textarea and input styles of the css were not being applied
  //So by removing the encapsulation, the styles were then applied globally
  //And it then worked in this scenario
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>()
}
