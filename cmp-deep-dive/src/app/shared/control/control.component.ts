import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

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
    class: 'control',
    '(click)': 'onClick()',
  },
  //Can also allow for listening to events on host property
})
export class ControlComponent implements AfterContentInit{
  //@HostBinding('class') className = 'control';
  //Achieves the same as host property, disencouraged as it's obsolete

  label = input.required<string>();
  private el = inject(ElementRef);
  /* @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >; */

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log("afterRender");
      
    });

    afterNextRender(() => {
      console.log("afterNextRender");
      
    });
  }
  
  ngAfterContentInit(): void {
    console.log('After Content Init');
    
  }

  //Demonstration of getting information directly of the host element
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
