import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  urlServer:String = environment.serverUrl;
  constructor(private http:HttpClient) { }

  get(url:String):any {
    return this.http.get(this.urlServer + '' + url);
  }
  post(url:String, body:any):any {
    return this.http.post(this.urlServer + '' + url, body);
  }
}
