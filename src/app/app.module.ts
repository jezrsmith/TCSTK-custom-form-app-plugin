import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { BaseCustomFormComponent } from './form-components/base-custom-form/base-custom-form.component';
import {NewPartnerRequestFormComponent} from './form-components/new-partner-request-form/new-partner-request-form.component';
import {createCustomElement} from '@angular/elements';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule, MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule, MatSliderModule, MatStepperModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FORM_REGISTRY, FormViewerComponent} from './form-components/form-viewer/form-viewer.component';
import { PartnerRequestCasedataComponent } from './form-components/partner-request-casedata/partner-request-casedata.component';
import {UpdateRequestMetricsFormComponent} from './form-components/update-request-metrics-form/update-request-metrics-form.component';
import {AppComponent} from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseCustomFormComponent,
    NewPartnerRequestFormComponent,
    FormViewerComponent,
    PartnerRequestCasedataComponent,
    UpdateRequestMetricsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatStepperModule,
    MatSliderModule,
    MatDatepickerModule,
    FormsModule,
    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BaseCustomFormComponent, FormViewerComponent, NewPartnerRequestFormComponent, PartnerRequestCasedataComponent, UpdateRequestMetricsFormComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIconLiteral(
      'tcs-close-icon',
      this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">\n' +
        '  <path class="svg-content" fill="#727272" d="M21.483 5.012L14.495 12l6.988 6.987a1.766 1.766 0 0 1-2.495 2.495L12 14.495l-6.987 6.987a1.766 1.766 0 0 1-2.495-2.495L9.504 12 2.517 5.012a1.765 1.765 0 0 1 2.495-2.495L12 9.504l6.987-6.987a1.765 1.765 0 0 1 2.495 2.495"/>\n' +
        '  <path fill="none" d="M0 0h24v24H0z"/>\n' +
        '</svg>\n')
    );
  }

  /*ngDoBootstrap() {
    if (!customElements.get('custom-form')) {
      console.log('bootstrapping');
      console.log(customElements);
      const el = createCustomElement(FormViewerComponent,
        {injector: this.injector});
      customElements.define('custom-form', el);
    } else {
      console.log('already bootstrapped');
    }
  }*/
}
