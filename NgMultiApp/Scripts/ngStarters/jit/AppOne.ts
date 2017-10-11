
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppOneModule } from "../../ngModules/AppOneModule";


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppOneModule);
