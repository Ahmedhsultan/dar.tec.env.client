import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  urlServer:String = environment.serverUrl;
  constructor(private http:HttpClient) { }

  get<T>(url:String):any {
    return this.http.get<T>(this.urlServer + '' + url);
  }
  post<T>(url:String, body:any, headers?:HttpHeaders):any {
    return this.http.post<T>(this.urlServer + '' + url, body, {headers});
  }
}
