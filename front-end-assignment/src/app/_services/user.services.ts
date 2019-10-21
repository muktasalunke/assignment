import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UsersService {
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
