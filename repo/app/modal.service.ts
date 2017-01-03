import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  isModal:boolean = false;
  getModalState(): Promise<boolean> {
    console.log('this is the modal service isModal = ' + this.isModal); 
    return Promise.resolve(this.isModal);
  }
}
