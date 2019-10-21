import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsersService implements Resolve<any>
{
    users: any;
    search:any;
    onUsersChanged: BehaviorSubject<any>;
    filters = {                
        "page": 0,
        "per_page": '',            
        "q": "",                   
        "direction": "asc",
    };
    onSearchChanged: any;
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onUsersChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getUsers(this.filters)
            ]).then(
                ([files]) => {

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get users
     *
     * @returns {Promise<any>}
     */
    getUsers(filters): Promise<any>
    {
        // http://localhost:8000/api/list/users?
        return new Promise((resolve, reject) => {
            this._httpClient.get(`https://api.github.com/users`,{params : filters})
                .subscribe((response: any) => {
                    this.users = response;
                    this.onUsersChanged.next(this.users);
                    resolve(response);
                }, reject);
        });
    }

    getSearchedUsers(filters:any):Observable<any>
    {
        let params = new HttpParams();
        filters.forEach(param => {
            let key = Object.keys(param)[0];
            let value = param[key];
            if(value){
            params = params.append(key, value.toString());
            }
        });

        return this._httpClient.get<any>(`https://api.github.com/search/users`, { params: params })
    }

    getDetailsList(url:any):Observable<any>
    {
         return this._httpClient.get<any>(url)
    }

    /** HANDLE HTTP ERROR */
    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message);
    }
    
}
