import {computed, Injectable, signal} from '@angular/core';
import {AppInfoHttpService} from '../httpService/app-info-http.service';
import {tap} from 'rxjs';
import InitAppDTO = Kubenbois.InitAppDTO;

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {
  public appInfo = signal<InitAppDTO>({ games: [] });
  public games = computed(() => this.appInfo().games);

  constructor(private appInfoHttpService: AppInfoHttpService) {
    this.loadAppInfo()
  }

  private loadAppInfo(): void {
    this.appInfoHttpService.requestInfos().pipe(
      tap(newState => this.appInfo.set(newState))
    ).subscribe();
  }
}
