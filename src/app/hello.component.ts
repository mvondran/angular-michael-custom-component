import { Component, Input } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  	<item *ngFor="let item of items" [item]="item" [isItem]="true"></item>
  	<!--<item [isItem]="false" [data]="listOfThings" [textField]="'display'" [valueField]="'index'" [value]="listOfThings[0]" [debug]="true"></item>-->
	  <div style="display: inline-block; width: 200px; height: 200px; padding: 12px 10px; border: 1px solid red;">
		  <multi-select-drop-down-list [data]="listOfThings" [textField]="'display'" [valueField]="'index'" [value]="listOfThings[0]" [debug]="true" ></multi-select-drop-down-list>
	  </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  listOfThings =
      [
        {
          display: "Select an Item",
          selected: false,
          index: 0
        },
        {
          display: "Item 1",
          selected: false,
          index: 1
        },
        {
          display: "Item 3",
          selected: false,
          index: 2
        },
        {
          display: "Item 3",
          selected: false,
          index: 3
        },
        {
          display: "Item 4",
          selected: false,
          index: 4
        }
      ];

  items = [{
    name: 'John',
    age: 25
  }, {
    name: 'Jane',
    age: 22
  }, {
    name: 'Foo',
    age: 28
  }, {
    name: 'Bar',
    age: 21
  }]
}
