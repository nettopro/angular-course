import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //Value will be iniatilized outside of typescript code
  //Currently in the app section of code (app.html / app.ts)
  @Input({required: true}) id !: string;
  @Input({required: true}) avatar !: string; 
  @Input({required: true}) name !: string;
  
  @Output() select = new EventEmitter();

  //Same thing as the output above but less verbose
  //select = output<string>();

  public get imagePath() : string {
    return 'assets/users/' + this.avatar;
  }
  

  onSelectUser() {
    this.select.emit(this.id);
  }
  
}
