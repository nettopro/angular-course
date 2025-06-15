import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { UserProfile } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //Value will be iniatilized outside of typescript code
  //Currently in the app section of code (app.html / app.ts)
  @Input({required: true}) user !: UserProfile;
  @Input({required: true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  //Same thing as the output above but less verbose
  //select = output<string>();

  public get imagePath() : string {
    return 'assets/users/' + this.user.avatar;
  }
  

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  
}
