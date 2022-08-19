import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    post(url: any, data: any) {
        return this.http.post(environment.url + url, data);
    }
    customPost(url: any, data: any) {
        return this.http.post(url, data);
    }
    put(url: any, data: any, id: any) {
        if (id != '')
            return this.http.put(environment.url + url + "/" + id, data);
        else
            return this.http.put(environment.url + url, data);
    }
    get(url: any) {
        return this.http.get(environment.url + url);
    }
}
