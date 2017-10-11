
import { platformBrowser } from '@angular/platform-browser';

import { AppOneModuleNgFactory } from "../../../aot/Scripts/ngModules/AppOneModule.ngfactory";


platformBrowser().bootstrapModuleFactory(AppOneModuleNgFactory);


