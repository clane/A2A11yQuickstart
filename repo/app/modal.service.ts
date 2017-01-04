import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";


@Injectable()
export class ModalService {

  showModal: boolean = false;

  getShowModal(){
    return this.showModal;
  }

  setShowModalFalse(){
    this.showModal = false;
  }
 
  setShowModalTrue(){
    this.showModal = true;
  }


}
