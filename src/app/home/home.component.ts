import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'title';
  name: string = 'name';

  change(title: string, name: string) {
    console.log(title);
    console.log(name);
  }
}
