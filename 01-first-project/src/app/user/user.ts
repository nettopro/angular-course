import { Component, computed, input, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // //Valor será inicializado fora do código typescript
  // //Atualmente nó codigo do app
  // @Input({required: true}) avatar !: string; 
  // @Input({required: true}) name !: string;

  avatar = input.required<string>();
  name = input.required<string>(); //These are read-only signals (cannot be reassigned)

  imagePath = computed(() => 'assets/users' + this.avatar());

  // public get imagePath() : string {
  //   return 'assets/users/' + this.avatar;
  // }
  

  onSelectUser() {
  }
  
}
