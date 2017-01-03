import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject'

@Injectable()
export class ModalService {
 
  // Observable source
  private modalStateSource = new Subject<boolean>();
  // Observable stream
  modalStateChanged$ = this.modalStateSource.asObservable();

  getModalState(state: boolean) {
    this.modalStateSource.next(state);
  }

 
  setModalTrue(){ 
    console.log('calling setModalTrue');
  }
  setModalFalse(){ 
    console.log('calling setModalFalse');
  }
 

}
