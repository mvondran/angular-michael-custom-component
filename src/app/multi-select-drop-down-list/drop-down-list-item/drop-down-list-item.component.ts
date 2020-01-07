import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-drop-down-list-item',
	templateUrl: './drop-down-list-item.component.html',
	styleUrls: ['./drop-down-list-item.component.css']
})
export class DropDownListItemComponent implements OnInit {
	@Input()
	public dataItem: any;

	@Input()
	public itemSelected:boolean = false;

	@Input()
	public textField: string;

	@Input()
	public valueField: string;

	displayText: string = "";
	constructor() {
	}

	ngOnInit() {
		this.displayText = this.dataItem[this.textField];
	}

}
