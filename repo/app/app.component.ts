import { Component, Input, ViewChild, ViewChildren, Renderer. EventEmitter, Output, AfterViewInit, Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from './state';
import { StateService } from './state.service';

@Component({
    selector: 'aria-tooltip',
    template: `
        <style>
          #tooltip { padding:10px; width:200px; border-radius:10px; background-color:beige;  position:relative; top:-45px; left:180px; }  
        </style>
        <h2>Tooltip</h2>
        <p>Focus the following link to see the tooltip</p>
        <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">link with tooltip</a>
        <div id="tooltip" role="tooltip" *ngIf="show" [attr.aria-hidden]="ariaHidden">lorem impsum dolar this is my tooltip</div>
`
})
export class TooltipComponent {
    show: boolean = false;
    ariaHidden: boolean = !this.show;
    open() {
        this.show = true;
        this.ariaHidden = !this.show;
    }
    close() {
        this.show = false;
        this.ariaHidden = !this.show;
    }
    toggle() {
        this.show = !this.show;
        this.ariaHidden = !this.show;
    }
}

@Component({
  selector: "aria-accordion",
  template: `
    <style>
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; } 
      #insertionPoint { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <h2>Accordion</h2>
    <p>Use the following link to toggle the appearance of the accordion's content</p>
    <a id="accLink" href="#" (click)="toggle()" aria-controls="insertionPoint" [attr.aria-expanded]="expanded"><span class="icon">+</span> Accordion Link</a>
    <div id="insertionPoint" *ngIf="show">
        <p>Lorem impsum ...</p>
    </div>
  ` 
})

export class AccordionComponent {
  show: boolean = false;
  expanded: boolean = false;

  toggle() {
    this.show = !this.show;
    this.expanded = !this.expanded;
  }
}

@Component({
  selector: "aria-alert",
  template: `
    <style>
      #alert { width:500px; margin:50px auto; } 
      #alertButton { display:block; } 
      #alertLiveRegion { border:2px solid; padding:10px; margin-top:10px; } 
    </style>
    <h2>Alert</h2>
    <p>Alerts will appear below and be announced to screen readers assertively</p>
    <button id="alertButton" href="#" (click)="stopAlerts()" aria-controls="alertLiveRegion">Stop Alerts</button>
    <div id="alertLiveRegion" role="alert" aria-live="assertive">{{alertText}}</div>
  ` 
})

export class AlertComponent {
  alertText: string = "This is a live region, the alert text will appear here dynamically";
  alertsOn: boolean = true;
  stopAlerts() {
    this.alertsOn = false;
  }
  
  ngAfterViewInit() {
    let cnt = 0;
    let intervalId =  setInterval(()=>{
      this.alertText = "alert " + cnt;
      cnt = cnt + 1;
      if(this.alertsOn == false){ clearInterval(intervalId); }
    }, 1000);
  }
}

@Component({
  selector: "modal-open-button",
  template: `
    <h2>Modal</h2>
    <button #modalOpen (click)="open()">Open Modal</button>
  ` 
})
export class ModalOpenButton {
  constructor(private renderer: Renderer) {}
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
  templateUrl:"./app/templates/modal.html"
      
})
export class ModalDialog  {
  constructor(private renderer: Renderer) {}
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
  template: `
    <h2>ComboBox</h2>
    <label for="statesInput">States</label>
    <input id="statesInput" #input
      role="combobox"
      [attr.aria-expanded]="expanded"
      aria-autocomplete="both"
      type="text" 
      (keydown.alt.ArrowDown)="expand()" 
      (keydown.alt.ArrowUp)="collapse()" 
      (keydown.a)="firstCharAlphaSelect($event)"
      (keydown.b)="firstCharAlphaSelect($event)"
      (keydown.c)="firstCharAlphaSelect($event)"
      (keydown.d)="firstCharAlphaSelect($event)"
      (keydown.e)="firstCharAlphaSelect($event)"
      (keydown.f)="firstCharAlphaSelect($event)"
      (keydown.g)="firstCharAlphaSelect($event)"
      (keydown.h)="firstCharAlphaSelect($event)"
      (keydown.i)="firstCharAlphaSelect($event)"
      (keydown.j)="firstCharAlphaSelect($event)"
      (keydown.k)="firstCharAlphaSelect($event)"
      (keydown.l)="firstCharAlphaSelect($event)"
      (keydown.m)="firstCharAlphaSelect($event)"
      (keydown.n)="firstCharAlphaSelect($event)"
      (keydown.o)="firstCharAlphaSelect($event)"
      (keydown.p)="firstCharAlphaSelect($event)"
      (keydown.q)="firstCharAlphaSelect($event)"
      (keydown.r)="firstCharAlphaSelect($event)"
      (keydown.s)="firstCharAlphaSelect($event)"
      (keydown.t)="firstCharAlphaSelect($event)"
      (keydown.u)="firstCharAlphaSelect($event)"
      (keydown.v)="firstCharAlphaSelect($event)"
      (keydown.w)="firstCharAlphaSelect($event)"
      (keydown.x)="firstCharAlphaSelect($event)"
      (keydown.y)="firstCharAlphaSelect($event)"
      (keydown.z)="firstCharAlphaSelect($event)"
      (keydown.shift.a)="firstCharAlphaSelect($event)"
      (keydown.shift.b)="firstCharAlphaSelect($event)"
      (keydown.shift.c)="firstCharAlphaSelect($event)"
      (keydown.shift.d)="firstCharAlphaSelect($event)"
      (keydown.shift.e)="firstCharAlphaSelect($event)"
      (keydown.shift.f)="firstCharAlphaSelect($event)"
      (keydown.shift.g)="firstCharAlphaSelect($event)"
      (keydown.shift.h)="firstCharAlphaSelect($event)"
      (keydown.shift.i)="firstCharAlphaSelect($event)"
      (keydown.shift.j)="firstCharAlphaSelect($event)"
      (keydown.shift.k)="firstCharAlphaSelect($event)"
      (keydown.shift.l)="firstCharAlphaSelect($event)"
      (keydown.shift.m)="firstCharAlphaSelect($event)"
      (keydown.shift.n)="firstCharAlphaSelect($event)"
      (keydown.shift.o)="firstCharAlphaSelect($event)"
      (keydown.shift.p)="firstCharAlphaSelect($event)"
      (keydown.shift.q)="firstCharAlphaSelect($event)"
      (keydown.shift.r)="firstCharAlphaSelect($event)"
      (keydown.shift.s)="firstCharAlphaSelect($event)"
      (keydown.shift.t)="firstCharAlphaSelect($event)"
      (keydown.shift.u)="firstCharAlphaSelect($event)"
      (keydown.shift.v)="firstCharAlphaSelect($event)"
      (keydown.shift.w)="firstCharAlphaSelect($event)"
      (keydown.shift.x)="firstCharAlphaSelect($event)"
      (keydown.shift.y)="firstCharAlphaSelect($event)"
      (keydown.shift.z)="firstCharAlphaSelect($event)"
      (keydown.ArrowDown)="selectNextOption()" 
      (keydown.ArrowUp)="selectPrevOption()"
    />
    <button (click)="toggleExpanded()" tabindex="-1">toggle listbox</button>
    <list-box 
    [selectedId]="selectedId" 
    *ngIf="expanded" 
    (onListboxOptionSelected)="onListboxOptionSelected($event)"
    (onListboxEscPressed)="onListboxEscPressed()"
    ></list-box>
   
  `, 
   providers: [StateService]
})

export class ComboBox implements AfterViewInit {
  constructor(private stateService: StateService, private renderer: Renderer) {}
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
  }
}

@Component({
  selector: 'list-box',
  template: `
    <style>
      div[role="listbox"] { 
        margin-top:10px;
        border:2px solid #000;
        height:200px; 
        overflow:scroll;
        width:200px;
        padding:10px;
        background-color:#000;
        color:yellow; 
      }


      div[role="option"]{ 
        margin-top:10px;
        padding:5px;
      }

      div[role="option"]:focus { 
        outline:2px dotted yellow;
      }
    
    </style>
    <div tabindex="-1" role="listbox" [attr.aria-expanded]="expanded">
      <div *ngFor="let state of states" 
        #option 
        role="option"
        (keydown.ArrowDown)="focusNextOption()" 
        (keydown.ArrowUp)="focusPrevOption()" 
        (keydown.enter)="selectOption()" 
        (keydown.esc)="escapeListbox()"
        (click)="selectOptionWithClick($event)" 
        id="{{state.id}}"
        tabindex="-1"
        (keydown.a)="firstCharAlphaFocus($event)"
        (keydown.b)="firstCharAlphaFocus($event)"
        (keydown.c)="firstCharAlphaFocus($event)"
        (keydown.d)="firstCharAlphaFocus($event)"
        (keydown.e)="firstCharAlphaFocus($event)"
        (keydown.f)="firstCharAlphaFocus($event)"
        (keydown.g)="firstCharAlphaFocus($event)"
        (keydown.h)="firstCharAlphaFocus($event)"
        (keydown.i)="firstCharAlphaFocus($event)"
        (keydown.j)="firstCharAlphaFocus($event)"
        (keydown.k)="firstCharAlphaFocus($event)"
        (keydown.l)="firstCharAlphaFocus($event)"
        (keydown.m)="firstCharAlphaFocus($event)"
        (keydown.n)="firstCharAlphaFocus($event)"
        (keydown.o)="firstCharAlphaFocus($event)"
        (keydown.p)="firstCharAlphaFocus($event)"
        (keydown.q)="firstCharAlphaFocus($event)"
        (keydown.r)="firstCharAlphaFocus($event)"
        (keydown.s)="firstCharAlphaFocus($event)"
        (keydown.t)="firstCharAlphaFocus($event)"
        (keydown.u)="firstCharAlphaFocus($event)"
        (keydown.v)="firstCharAlphaFocus($event)"
        (keydown.w)="firstCharAlphaFocus($event)"
        (keydown.x)="firstCharAlphaFocus($event)"
        (keydown.y)="firstCharAlphaFocus($event)"
        (keydown.z)="firstCharAlphaFocus($event)"
        (keydown.shift.a)="firstCharAlphaFocus($event)"
        (keydown.shift.b)="firstCharAlphaFocus($event)"
        (keydown.shift.c)="firstCharAlphaFocus($event)"
        (keydown.shift.d)="firstCharAlphaFocus($event)"
        (keydown.shift.e)="firstCharAlphaFocus($event)"
        (keydown.shift.f)="firstCharAlphaFocus($event)"
        (keydown.shift.g)="firstCharAlphaFocus($event)"
        (keydown.shift.h)="firstCharAlphaFocus($event)"
        (keydown.shift.i)="firstCharAlphaFocus($event)"
        (keydown.shift.j)="firstCharAlphaFocus($event)"
        (keydown.shift.k)="firstCharAlphaFocus($event)"
        (keydown.shift.l)="firstCharAlphaFocus($event)"
        (keydown.shift.m)="firstCharAlphaFocus($event)"
        (keydown.shift.n)="firstCharAlphaFocus($event)"
        (keydown.shift.o)="firstCharAlphaFocus($event)"
        (keydown.shift.p)="firstCharAlphaFocus($event)"
        (keydown.shift.q)="firstCharAlphaFocus($event)"
        (keydown.shift.r)="firstCharAlphaFocus($event)"
        (keydown.shift.s)="firstCharAlphaFocus($event)"
        (keydown.shift.t)="firstCharAlphaFocus($event)"
        (keydown.shift.u)="firstCharAlphaFocus($event)"
        (keydown.shift.v)="firstCharAlphaFocus($event)"
        (keydown.shift.w)="firstCharAlphaFocus($event)"
        (keydown.shift.x)="firstCharAlphaFocus($event)"
        (keydown.shift.y)="firstCharAlphaFocus($event)"
        (keydown.shift.z)="firstCharAlphaFocus($event)"
        >{{state.name}}</div>
    </div>
  `
})
export class ListBoxComponent { 
  constructor(private stateService: StateService, private renderer: Renderer) { }
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
      <aria-tooltip *ngIf="notModal">Loading...</aria-tooltip>
      <aria-accordion *ngIf="notModal">Loading...</aria-accordion>
      <aria-alert *ngIf="notModal">Loading...</aria-alert>
      <modal-open-button *ngIf="notModal" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
      <combo-box *ngIf="notModal">Loading...</combo-box>
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


