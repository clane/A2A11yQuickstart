import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  isModal:boolean = false;
 
  setModalTrue(){ 
    this.isModal = true; 
    console.log('calling setModalTrue, isModal now = ' + this.isModal );
  }
  setModalFalse(){ 
    this.isModal = false;
    console.log('calling setModalFalse');
    console.log('calling setModalFalse isModal now = ' + this.isModal );
  }
  getState() { 
    return this.isModal;
  }

}
