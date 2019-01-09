import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
     
    
   success(message: string) {
       this.subject.next({ type: 'success', message: message});
   }

   error(message: string) {
        this.subject.next({ type: 'danger', message: message });
   }

   getMessage(): Observable<any> {
        return this.subject.asObservable();
   }
 }