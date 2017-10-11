
import { platformBrowser } from '@angular/platform-browser';

import { AppTwoModuleNgFactory } from "../../../aot/Scripts/ngModules/AppTwoModule.ngfactory";


platformBrowser().bootstrapModuleFactory(AppTwoModuleNgFactory);


