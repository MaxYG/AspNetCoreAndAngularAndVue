import { Observable, of } from "rxjs";
import { TranslateLoader } from '@ngx-translate/core';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class CustomTranslateLoader implements TranslateLoader {
//     constructor(private inej:Injector){}

//     getTranslation(lang: string): Observable<any> {
//         let http = this.inej.get(HttpClient);
//         return http.get(`./assets/i18n/${lang}.json`);
//     }
// }