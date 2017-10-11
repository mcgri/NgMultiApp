import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedComponent } from "../ngComponents/shared-component/SharedComponent";

@NgModule({
    imports: [BrowserModule],
    declarations: [SharedComponent],
    exports: [SharedComponent]

})
export class SharedComponentModule {}