import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppOneComponent } from "../ngComponents/app-one/AppOneComponent";
import { SharedComponentModule } from "./SharedComponentModule";
@NgModule({
    imports: [BrowserModule,SharedComponentModule],
    declarations: [AppOneComponent],
    bootstrap:[AppOneComponent]

})
export class AppOneModule {}