import { Injectable } from '@angular/core';
import {AppInfoHttpService} from '../httpService/app-info-http.service';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import InitAppDTO = Kubenbois.InitAppDTO;

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {
  private state: InitAppDTO = { games: [] };
  private infoAppSubject = new BehaviorSubject<InitAppDTO>(this.state);

  constructor(private appInfoHttpService: AppInfoHttpService) {
    this.loadAppInfo().subscribe();
  }

  public getGames(): Observable<InitAppDTO['games']> {
    return this.infoAppSubject.asObservable().pipe(map(state => state.games));
  }

  private loadAppInfo(): Observable<InitAppDTO> {
    return this.appInfoHttpService.requestInfos().pipe(
      tap(newState => this.updateState(newState))
    );
  }

  private updateState(newState: InitAppDTO): void {
    this.state = newState;
    this.infoAppSubject.next(this.state);
  }
}
