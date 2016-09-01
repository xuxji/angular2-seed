import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {
  param: string = 'world';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('cn');
  }
}
