import {Component, Input, OnInit} from '@angular/core';


@Component({
	selector: 'app-drop-down-list-popup',
	templateUrl: './drop-down-list-popup.component.html',
	styleUrls: ['./drop-down-list-popup.component.css']
})
export class DropDownListPopupComponent implements OnInit {
	@Input()
	public listItems: Array<any>;

	@Input()
	public textField: string;

	@Input()
	public valueField: string;

	constructor() {
	}

	ngOnInit() {
	}

	public onSelection(dataItem: any){}

}
