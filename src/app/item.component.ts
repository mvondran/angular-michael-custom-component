import {Component, Input} from '@angular/core';

@Component({
	selector: 'item',
	template: `
		<div class="container">
			<div *ngIf="isItem">
				<div *ngIf="!inEditMode">
					<p>Name: {{item.name}}</p>
					<p>Age: {{item.age}}</p>
				</div>
				<div *ngIf="inEditMode">
					<input [(ngModel)]="item.name"/>
					<input [(ngModel)]="item.age"/>
				</div>
				<button (click)="inEditMode = true">Edit</button>
				<button (click)="inEditMode = false">Finish</button>
			</div>
			<div *ngIf="!isItem">
				<multi-select-drop-down-list [data]="data" [textField]="textField" [valueField]="valueField" [value]="value" [debug]="debug" ></multi-select-drop-down-list>
			</div>
		</div>
	`,
	styles: [`
		.container {
			display: inline-block;
			width: 200px;
			height: 200px;
			padding: 12px 10px;
			border: 1px solid red;
			vertical-align: top;
		}
	`]
})
export class ItemComponent {
	@Input() item: any;
	@Input() isItem: boolean = false;
	@Input() data: any;
	@Input() textField: string;
	@Input() valueField: string;
	@Input() value: any;
	@Input() debug: boolean;
	inEditMode = false;
}