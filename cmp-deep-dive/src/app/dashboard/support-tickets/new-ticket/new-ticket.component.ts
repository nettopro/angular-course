import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ArrowButtonComponent } from '../../../shared/arrow-button/arrow-button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ArrowButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  //@ViewChild('form') form ?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = signal<string>('');
  enteredText = signal<string>('');

  add = output<{ title: string; text: string }>();

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.form().nativeElement);
  }

  /* onSubmit(titleElement: HTMLInputElement) {
    const enteredTitle = titleElement.value;
    console.log(enteredTitle);
  } */ //One way of using template variables

  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });
    this.enteredTitle.set('');
    this.enteredText.set('');
    /* this.form()?.nativeElement.reset(); */
  }
}
