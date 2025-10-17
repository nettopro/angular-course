import { Component } from '@angular/core';
import { ArrowButtonComponent } from "../../../shared/arrow-button/arrow-button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ArrowButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
