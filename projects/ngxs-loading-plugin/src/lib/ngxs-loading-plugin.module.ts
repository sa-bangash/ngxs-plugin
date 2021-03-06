import { NgModule, ModuleWithProviders } from '@angular/core';
// directives
import { NgxsDispatchDirective } from './directives/action-dispatch.directive';
import { NgxsActionWatchDirective } from './directives/action-watch.directive';
import { NgxsStateWatchLoadingDirective } from './directives/state-watch.directive';
import { SubmitLoadingDirective } from './directives/submit-loading.directive';

import { IConfig } from './directives/interface';
import { DEFAULT_CONFIG } from './directives/constant';

@NgModule({
  declarations: [
    NgxsDispatchDirective,
    NgxsActionWatchDirective,
    NgxsStateWatchLoadingDirective,
    SubmitLoadingDirective
  ],
  exports: [
    NgxsDispatchDirective,
    NgxsActionWatchDirective,
    NgxsStateWatchLoadingDirective,
    SubmitLoadingDirective,
  ],
})
export class NgxsLoadingPluginModule {
  static forRoot(config: IConfig = DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: NgxsLoadingPluginModule,
      providers: [
        {
          provide: 'config', useValue: config,
        }
      ]
    };
  }
}
