import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
counter:number = 0;

incrementCounter() : void{
  this.counter += 1;
}

names:string[] = ['George','Kyle','Julie','Martha'];

newName:string = '';

addName() : void {
  this.names.push(this.newName);
}
}