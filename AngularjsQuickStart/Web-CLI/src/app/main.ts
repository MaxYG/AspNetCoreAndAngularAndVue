import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {getTranslationProviders} from './i18n-providers';

const platform = platformBrowserDynamic();


getTranslationProviders().then(providers=>{
    const options={providers};
    platform.bootstrapModule(AppModule,options);
});