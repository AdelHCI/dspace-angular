import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { AppComponent } from '../../app/app.component';

import { AppModule } from '../../app/app.module';
import { DSpaceServerTransferStateModule } from '../transfer-state/dspace-server-transfer-state.module';
import { DSpaceTransferState } from '../transfer-state/dspace-transfer-state.service';

import { TranslateUniversalLoader } from '../translate-universal-loader';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

export function createTranslateLoader() {
  return new TranslateUniversalLoader('dist/assets/i18n/', '.json');
}

class AngularticsMock {
  public eventTrack(action, properties) { }
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'dspace-angular'
    }),
    RouterModule.forRoot([], {
      useHash: false
    }),
    NoopAnimationsModule,
    DSpaceServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: []
      }
    }),
    ServerModule,
    AppModule
  ],
  providers: [
    { provide: Angulartics2GoogleAnalytics, useClass: AngularticsMock }
  ]
})
export class ServerAppModule {
  constructor(
    private transferState: DSpaceTransferState,
  ) {
    this.transferState.transfer();
  }
}
