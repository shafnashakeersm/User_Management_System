import { Component } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
