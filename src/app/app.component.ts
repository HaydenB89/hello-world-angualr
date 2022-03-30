import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Bootcamp';
  maxOn: boolean = true;
  names: string[] = ["Ann", "Rob", "Cris", "David", "Ellen"];
  customers: any[] = [
    { id: 1, name: "MAX", sales: 10000, state: "OH"},
    { id: 2, name: "P&G", sales: 100000, state: "OH"},
    { id: 3, name: "Kroger", sales: 20000, state: "OH"}
  ];

  aString1: string = "";
  aString2: string = "";

  copy(): void {
    this.aString2 = this.aString1;
  }

  clicked(): void {
    if(this.maxOn){
      this.title = "The MAXimum Bootcamp!";
      this.maxOn = !this.maxOn;
    } else {
      this.maxOn = !this.maxOn;
      this.title = "The Bootcamp"
    }
  } 

}
