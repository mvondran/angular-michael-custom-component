import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {ItemComponent} from './item.component';

import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PopupModule} from '@progress/kendo-angular-popup';
import {MultiSelectDropDownListModule} from "./multi-select-drop-down-list/multi-select-drop-down-list.module";
import {MultiSelectDropDownListComponent} from "./multi-select-drop-down-list/multi-select-drop-down-list/multi-select-drop-down-list.component";


@NgModule({
	imports: [BrowserModule, FormsModule, DropDownsModule, BrowserAnimationsModule, PopupModule, MultiSelectDropDownListModule],
	declarations: [AppComponent, HelloComponent, ItemComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
