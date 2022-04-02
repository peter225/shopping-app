import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';
  lowerCase = 'ab';
  upperCase = 'ba';
  fg = '#ffffff';
  bg = '#000000';
  selection = 'name';
  options = ['name', 'address', 'other'];

  onChangeInput(event: any){
    console.log(event.target);
    this.lowerCase = event.target.value.toLowerCase();
    this.upperCase = event.target.value.toUpperCase();
  }
}
