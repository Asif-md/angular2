import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class AppService {

  private displaySidebarSource = new Subject<boolean>();

  displaySidebarConfirmed$ = this.displaySidebarSource.asObservable();

  displaySidebar(status: boolean) {
    this.displaySidebarSource.next(status);
  }
}
