import { Component, 
         Input, 
         ViewChild, 
         ViewChildren, 
         Renderer.
         EventEmitter, 
         Output, 
         AfterViewInit,
         Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from './state';
import { StateService } from './state.service';

@Component({
  selector: "modal-open-button",
  template: `
    <span role="link" tabindex="0" id="modalButton" #modalOpen (click)="open()">Modal</span>
  `,
  styles:[`
      #modalButton { color:#fff; width:200px; text-decoration:underline; display:inline-block; text-align:center; }  
  `],
})
export class ModalOpenButton {
  constructor(private renderer: Renderer, private titleService: Title) {}
  @ViewChild('modalOpen') openButton: ElementRef;
  @Output() onOpenButtonActivated = new EventEmitter<boolean>();
  open(){
      this.onOpenButtonActivated.emit(true);
  }
  focusMe(){
     this.renderer.invokeElementMethod(this.openButton.nativeElement, 'focus');
  }

}

@Component({
  selector: "modal-dialog",
  templateUrl: "./app/templates/modal.html",
  styleUrls: ["./app/templates/css/modal.css"]
})
export class ModalDialog  {
  constructor(private renderer: Renderer, private titleService: Title) {}
  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild('actionButton') actionButton: ElementRef;
  @Output() onCloseButtonActivated = new EventEmitter<boolean>();
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.closeButton.nativeElement, 'focus');
  }
  focusCloseButton() {
     this.renderer.invokeElementMethod(this.closeButton.nativeElement, 'focus');
  }
   focusActionButton() {
     this.renderer.invokeElementMethod(this.actionButton.nativeElement, 'focus');
  }
  close(){
      this.onCloseButtonActivated.emit(true);
  }
}

@Component({
   selector: "combo-box",
   templateUrl: "./app/templates/combobox.html",
   providers: [StateService]
})

export class ComboBox implements AfterViewInit {
  constructor(private stateService: StateService, private renderer: Renderer, private titleService: Title,) {}
  @ViewChild('input') input: ElementRef;
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
    this.inputTabindex = 0;
  }

  firstCharAlphaSelect(event) {
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
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName;
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
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName;
  }

  selectPrevOption(){
    let stateName: string;
    if( this.selectedId == 0){
      this.selectedId = this.states.length - 1;
    } else {
        this.selectedId = this.selectedId - 1;
    }
    stateName = this.states[this.selectedId].name;
    this.renderer.setElementProperty(this.input.nativeElement, 'value', stateName;
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

@Component({
  selector: 'list-box',
  templateUrl: "./app/templates/listbox.html",
  styles:[`
      div[role="listbox"] { 
        margin-top:10px;
        border:3px solid yellow;
        height:800px; 
        overflow:scroll;
        width:500px;
        padding:10px;
        background-color:#fff;
        color:#000; 
      }
      div[role="option"]{ 
        margin-top:10px;
        padding:5px;
      }
      div[role="option"]:focus { 
        outline:2px dotted #000;
      }
  `],
})
export class ListBoxComponent { 
  constructor(private stateService: StateService, private renderer: Renderer) {}
  @Output() onListboxOptionSelected = new EventEmitter<string>();
  @Output() onListboxEscPressed = new EventEmitter<boolean>();
  @ViewChildren('option') options;
  @Input('selectedId') focusIndex: number;
  states: State[];
  @Input() state: State;

  getStates(): void {
    this.stateService.getStates().then(states => this.states = states);
  }

  focusOption(optionIndex: number) {
    setTimeout( ()=>{  
      this.renderer.invokeElementMethod(this.options._results[optionIndex].nativeElement, 'focus');
    }, 0);
  }

  focusNextOption() {
    setTimeout( ()=>{  
      let optionsLength: number = this.options._results.length;
      if ( this.focusIndex === (optionsLength - 1 ){
        this.focusIndex = 0;
      } else {
          this.focusIndex = this.focusIndex + 1;
      }
      this.focusOption(this.focusIndex);
    }, 0);
  }

  focusPrevOption() {
    setTimeout( ()=>{ 
      let optionsLength: number = this.options._results.length;
      if( this.focusIndex === 0){
        this.focusIndex = optionsLength - 1;
      } else {
          this.focusIndex = this.focusIndex - 1;
      }
      this.focusOption(this.focusIndex);
    }, 0);
  }

  selectOption(){
    setTimeout(()=>{ 
       for(let i = 0; i < this.states.length; i++){ 
           if(i == this.focusIndex){
              this.onListboxOptionSelected.emit(this.states[i].name); 
           }
       }
    } 
    , 0);
  }

  selectOptionWithClick(event){
    this.focusIndex = event.target.id;
    this.selectOption();
  }

  escapeListbox() {
    this.onListboxEscPressed.emit(true);
  }

  firstCharAlphaFocus(event) {
    setTimeout(()=>{ 
      let firstCharEntered = event.key;
      for(let i = 0; i < this.states.length; i++){ 
        if(firstCharEntered.toUpperCase() == this.states[i].name.charAt(0)){
          this.focusIndex = i;
          this.focusOption(this.focusIndex);
          break;
        }
      }
    } 
    , 0);
  }

  ngOnInit(): void { 
    this.getStates();
  }
  
  ngAfterViewInit() { 
    this.focusOption(this.focusIndex); 
  }
  
}

@Component({
  selector: "widget-demo",
  template: `
      <h1 *ngIf="notModal">A11y Angular2 Demo</h1>
      <!--
      <modal-open-button *ngIf="notModal" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
      -->
      <a routerLink="/tooltip">Tooltip</a>
      <a routerLink="/accordion">Accordion</a>
      <a routerLink="/alert">Alert</a>
      <a routerLink="/combobox">Combobox</a>
      <router-outlet></router-outlet>
  `
})

export class WidgetDemoComponent {
  constructor(private titleService: Title, private renderer: Renderer) {}
  @ViewChild(ModalOpenButton)
  private modalButton: ModalOpenButton;
  notModal:boolean = true;

  ngAfterViewInit() { this.setTitle('A11y Widgets using Angular 2'); }
  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
  enterModalContext(){ this.notModal = false; }
  focusMe() { this.modalButton.focusMe(); }

  onCloseButtonActivated(){
     this.notModal = true;
     setTimeout( ()=>{ this.focusMe(); }, 0);//setTimeout needed for the modalButton to be defined
  }

  onOpenButtonActivated(){ this.notModal = false; }

}


