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
  template: `
      <style>
        #lightBox { background-color:#000; width:100%; min-height:2000px;  } 
        #dialog { background-color:yellow; width:500px; position:fixed; top:40%; left:30%; padding:20px; }
        #lightBox {
        background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%239C92AC' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }         
        #closeButton { position:absolute; top: 17px; left:475px; }
      </style>
      <div id="lightBox"></div>
      <div id="dialog" (keyup.esc)="close()">
        <p class="offscreenText">Beginning of dialog</p>
        <h1>Modal Dialog</h1>
        <button id="closeButton" #closeButton (keydown.shift.Tab)="focusActionButton()" (click)="close()" closeButtonActivated>X</button>
        <p>This is my version of a modal dialog. It is really a view swap. There is nothing under this.</p>
        <button #actionButton (keydown.Tab)="focusCloseButton()">Do it!</button>
        <p class="offscreenText">End of dialog</p>
      </div>
  `,
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
    <input #input
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


