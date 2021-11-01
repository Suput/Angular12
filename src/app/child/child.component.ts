import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name: string = 'Иван';
  age: number = 30;
  isMale: boolean = false;
  text: string = 'Стандартная строка';

  user = {
    name: 'Иван',
    surname: 'Иванов',
    age: 18,
  };

  change_name() {
    if (this.name !== 'Иван') {
      this.name = 'Иван';
    } else {
      this.name = 'Пётр';
    }
  }

  viewResult() {
    alert(this.user.name + '\n' + this.user.surname + '\n' + this.user.age);
  }
}
