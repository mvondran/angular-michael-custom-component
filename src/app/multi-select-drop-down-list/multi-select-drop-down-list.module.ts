import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { MultiSelectDropDownListComponent } from './multi-select-drop-down-list/multi-select-drop-down-list.component';
import { DropDownListPopupComponent } from './drop-down-list-popup/drop-down-list-popup.component';
import { DropDownListItemComponent } from './drop-down-list-item/drop-down-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropDownsModule,
		BrowserModule
    ],
	entryComponents: [ DropDownListPopupComponent, DropDownListItemComponent ],
    exports:[
		MultiSelectDropDownListComponent
    ],
    declarations: [MultiSelectDropDownListComponent, DropDownListPopupComponent, DropDownListItemComponent]
})
export class MultiSelectDropDownListModule { }
