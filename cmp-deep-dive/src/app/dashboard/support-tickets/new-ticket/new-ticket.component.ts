import { Component } from '@angular/core';
import { ArrowButtonComponent } from "../../../shared/arrow-button/arrow-button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ArrowButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
