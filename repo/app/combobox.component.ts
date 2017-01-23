import { Component, 
         Input, 
         ViewChild, 
         Renderer,
         EventEmitter, 
         Output, 
         AfterViewInit,
         } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from './state';
import { StateService } from './state.service';


@Component({
   selector: "combo-box",
   templateUrl: "./app/templates/combobox.html",
   providers: [StateService]
})

export class ComboBox implements AfterViewInit {
  constructor(private stateService: StateService, private renderer: Renderer, private titleService: Title) {}
  @ViewChild('input') input: any;
  expanded: boolean = false;  
  states: State[];
  @Input() state: State;
  selectedId: number = 0;

  getStates(): void {
    this.stateService.getStates().then(states => this.states = states);
  }

  toggleExpanded() { 
    this.expanded = !this.expanded;
  }
  expand() { 
    this.expanded = true; 
  }

  collapse(){  
    this.expanded = false; 
  }

  firstCharAlphaSelect(event: any) {
    setTimeout(()=>{ 
      let firstCharEntered = event.key;
      for(let i = 0; i < this.states.length; i++){ 
        if(firstCharEntered.toUpperCase() == this.states[i].name.charAt(0)){
          this.selectedId = i;
          this.onListboxOptionSelected(this.states[i].name); 
          break;
        }
      }
    } 
    , 0);
  }

  onListboxOptionSelected(stateName: string){
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName);
    this.expanded = false;
    //Get the id for the state and use it to set the selected id
    for(let i = 0; i < this.states.length; i++){ 
      if(stateName == this.states[i].name){
        this.selectedId = this.states[i].id; 
      }
    } 
  }

  selectNextOption(){
    let stateName: string;
    if( this.selectedId == (this.states.length - 1)){
      this.selectedId = 0;
    } else {
        this.selectedId = this.selectedId + 1;
    }
    stateName = this.states[this.selectedId].name;
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName);
  }

  selectPrevOption(){
    let stateName: string;
    if( this.selectedId == 0){
      this.selectedId = this.states.length - 1;
    } else {
        this.selectedId = this.selectedId - 1;
    }
    stateName = this.states[this.selectedId].name;
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName);
  }

  onListboxEscPressed(){
    this.collapse();
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  ngAfterViewInit() {
    this.getStates();
    this.setTitle('Combobox');
  }

  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
}




