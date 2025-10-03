import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import InitAppDTO = Kubenbois.InitAppDTO;

@Injectable({
  providedIn: 'root'
})
export class AppInfoHttpService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public requestInfos() {
    return this.http.get<InitAppDTO>(`${this.baseUrl}/init`);
  }
}
