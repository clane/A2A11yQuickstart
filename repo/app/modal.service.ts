import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  isModal:boolean = false;
  getModalState(): Promise<boolean> {
    return Promise.resolve(this.isModal);
  }
}
