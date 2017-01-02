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
    selector: 'aria-tooltip',
    template: `
        <h2>Tooltip</h2>
        <p>Focus the following link to see the tooltip</p>
        <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">link with tooltip</a>
        <div id="tooltip" role="tooltip" *ngIf="show" [attr.aria-hidden]="ariaHidden">lorem impsum dolar this is my tooltip</div>
    `,
    styles: [`
       #tooltip { 
         padding:10px; 
         width:200px; 
         border-radius:10px; 
         background-color:#fff; 
         position:relative; 
         top:-45px; 
         left:230px; 
         color:#000;
      }  
      #link { width:200px; }
    `],
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
    <h2>Accordion</h2>
    <p>Use the following link to toggle the appearance of the accordion's content</p>
    <button id="accLink" href="#" (click)="toggle()" aria-controls="insertionPoint" [attr.aria-expanded]="expanded"><span class="icon">+</span> Accordion Button</button>
    <div id="insertionPoint" *ngIf="show">
        <p>Lorem impsum ...</p>
    </div>
  `,
  styles:[`
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; } 
      #insertionPoint { background-color:#fff; color:#000; padding:10px; margin-top:10px; } 
      .icon { font-weight:bold; font-size:1.5rem; text-decoration:none; } 
  `],
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
    <h2>Alert</h2>
    <p>Alerts will appear below and be announced to screen readers assertively</p>
    <button id="alertButton" href="#" (click)="stopAlerts()" aria-controls="alertLiveRegion">Stop Alerts</button>
    <div id="alertLiveRegion" role="alert" aria-live="assertive">{{alertText}}</div>
  `,
  styles:
    [`
      #alert { width:500px; margin:50px auto; } 
      #alertButton { display:block; } 
      #alertLiveRegion { border:2px solid; padding:10px; margin-top:10px; } 
   `],
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
    <span role="link" id="modalButton" #modalOpen (click)="open()">Open Modal</span>
  `,
  styles:[`
      #modalButton { color:#fff; width:200px; }  
  `],
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
  templateUrl: "./app/templates/modal.html",
  styleUrls: ["./app/templates/css/modal.css"]
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
   templateUrl: "./app/templates/combobox.html",
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
  templateUrl: "./app/templates/listbox.html",
  styles:[`
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
  `],
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
      <modal-open-button *ngIf="notModal" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
      <a routerLink="/tooltip">Tooltip</a>
      <a routerLink="/accordion">accordion</a>
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


