import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  isModal:boolean = true;
  getModalState(): Promise<boolean> {
    return Promise.resolve(this.isModal);
  }
}
