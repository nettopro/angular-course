import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  //Accepts undefined value 
  //(is not strictly string in this case)
  @Input() name ?: string 

  //Same thing below but written more verbosely
  //@Input() name : string | undefined;
}
