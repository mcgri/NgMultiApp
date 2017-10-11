
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppTwoModule } from "../../ngModules/AppTwoModule";


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppTwoModule);
