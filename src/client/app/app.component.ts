import { Component } from '@angular/core';
import { Config} from './shared/index';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  param: string = 'world';

  constructor(private translate: TranslateService) {
    console.log('Environment config', Config);
    translate.setDefaultLang('en');
    translate.use('cn');
  }
}
