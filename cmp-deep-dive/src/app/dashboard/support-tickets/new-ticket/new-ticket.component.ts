import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ArrowButtonComponent } from "../../../shared/arrow-button/arrow-button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ArrowButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  //@ViewChild('form') form ?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
      console.log('After View Init');
      console.log(this.form().nativeElement);
      
      
  }

  /* onSubmit(titleElement: HTMLInputElement) {
    const enteredTitle = titleElement.value;
    console.log(enteredTitle);
  } */ //One way of using template variables

  onSubmit(title: string, ticketText: string){
    console.log(title);
    console.log(ticketText);
    this.form()?.nativeElement.reset();
  }
}
