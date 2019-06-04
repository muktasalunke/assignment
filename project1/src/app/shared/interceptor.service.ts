import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 401 || err.status === 403) {
            // auto logout if 401 response returned from api
            location.reload(true);
        }
        
        const error = err.error.message || err.statusText;
        return throwError(error);
    }))
}
}
