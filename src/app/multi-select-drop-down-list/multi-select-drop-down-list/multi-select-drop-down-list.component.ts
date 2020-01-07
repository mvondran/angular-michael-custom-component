import { Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopupService, PopupRef } from '@progress/kendo-angular-popup';
import { DropDownListPopupComponent } from "../drop-down-list-popup/drop-down-list-popup.component";

@Component({
	selector: 'multi-select-drop-down-list',
	templateUrl: './multi-select-drop-down-list.component.html',
	styleUrls: ['./multi-select-drop-down-list.component.css']
})
export class MultiSelectDropDownListComponent implements OnInit {
	@Input() debug: boolean = false;

	@Input()
	public data: Array<any>;

	@Input()
	public textField: string;

	@Input()
	public valueField: string;

	@Input()
	public value: Object;

	@Input()
	public isOpen: boolean = false;

	private listItems: Array<any>;

	private popupRef: PopupRef;

	constructor(private popupService: PopupService) {}

	@ViewChild('anchor') public anchor: ElementRef;
	@ViewChild('anchor') public dropDownList: any;

	defaultValue = [
		{
			display: "Select an Item",
			selected: false,
			index: 0
		}
	];

	ngOnInit() {

		if (this.data.length <= 0) {
			this.value = this.defaultValue;
		}
		else {
			this.value = this.data[0][this.textField];
		}

		if(this.data !== undefined && this.data.length > 0){
			for (let i = 0; i >= this.data.length; i++){
				this.listItems[i].data = this.data[i];
				this.listItems[i].selected = false;
			}
		}
	}

  	onOpen(event: any){
		event.preventDefault();
	}

	onDropDownListClick() {
		if(this.isOpen) {
			this.popupRef.close();
			this.popupRef = null;
			this.isOpen = false;
		}
		else{
			this.popupRef = this.popupService.open({
				anchor: this.anchor,
				content: DropDownListPopupComponent
			});
			const listReference = this.popupRef.content.instance;
			listReference.names = this.listItems;
			listReference.textField = this.textField;
			listReference.valueField = this.valueField;
			this.isOpen = true;
		}
	}
}