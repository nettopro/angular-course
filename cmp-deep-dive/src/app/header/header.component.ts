import { Component } from '@angular/core';
import { ArrowButtonComponent } from "../shared/arrow-button/arrow-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ArrowButtonComponent]
})
export class HeaderComponent {

}
