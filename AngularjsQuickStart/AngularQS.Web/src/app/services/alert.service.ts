import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();

   success(message: string) {
       this.subject.next({ type: 'success', msg: message});
   }

   error(message: string) {
        this.subject.next({ type: 'error', texmsgt: message });
   }

   getMessage(): Observable<any> {
        return this.subject.asObservable();
   }
 }