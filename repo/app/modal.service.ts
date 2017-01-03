import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class ModalService {

  // Observable sources
  private isModalSource = new Subject<boolean>();
 
  // Observable streams
  isModalChanged$ = this.isModalSource.asObservable();


  isModal:boolean = false;
}
