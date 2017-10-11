import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppTwoComponent } from "../ngComponents/app-two/AppTwoComponent";
import { SharedComponentModule } from "./SharedComponentModule";
@NgModule({
    imports: [BrowserModule,SharedComponentModule],
    declarations: [AppTwoComponent],
    bootstrap:[AppTwoComponent]

})
export class AppTwoModule {}