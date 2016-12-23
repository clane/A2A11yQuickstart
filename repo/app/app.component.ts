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
    <p>Use the following button to dynamically populate the alert's live region</p>
    <button id="alertButton" href="#" (click)="alert()" aria-controls="alertLiveRegion">Trigger an alert</button>
    <div id="alertLiveRegion" role="alert">{{alertText}}</div>
  ` 
})

export class AlertComponent {

  alertText: string = "This is a live region, the alert text will appear here dynamically";

  alert() {
    this.alertText = "Oh no!"
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

    <div role="combobox">
      <input (click)="toggleExpanded()"  
        type="text" 
        (keydown.alt.ArrowDown)="expand()" 
        (keydown.alt.ArrowUp)="collapse()" 
        (keydown.a)="alphaFocus($event)"
        (keydown.b)="alphaFocus($event)"
        (keydown.c)="alphaFocus($event)"
        (keydown.d)="alphaFocus($event)"
        (keydown.e)="alphaFocus($event)"
        (keydown.f)="alphaFocus($event)"
        (keydown.g)="alphaFocus($event)"
        (keydown.h)="alphaFocus($event)"
        (keydown.i)="alphaFocus($event)"
        (keydown.j)="alphaFocus($event)"
        (keydown.k)="alphaFocus($event)"
        (keydown.l)="alphaFocus($event)"
        (keydown.m)="alphaFocus($event)"
        (keydown.n)="alphaFocus($event)"
        (keydown.o)="alphaFocus($event)"
        (keydown.p)="alphaFocus($event)"
        (keydown.q)="alphaFocus($event)"
        (keydown.r)="alphaFocus($event)"
        (keydown.s)="alphaFocus($event)"
        (keydown.t)="alphaFocus($event)"
        (keydown.u)="alphaFocus($event)"
        (keydown.v)="alphaFocus($event)"
        (keydown.w)="alphaFocus($event)"
        (keydown.x)="alphaFocus($event)"
        (keydown.y)="alphaFocus($event)"
        (keydown.z)="alphaFocus($event)"
        (keydown.shift.a)="alphaFocus($event)"
        (keydown.shift.b)="alphaFocus($event)"
        (keydown.shift.c)="alphaFocus($event)"
        (keydown.shift.d)="alphaFocus($event)"
        (keydown.shift.e)="alphaFocus($event)"
        (keydown.shift.f)="alphaFocus($event)"
        (keydown.shift.g)="alphaFocus($event)"
        (keydown.shift.h)="alphaFocus($event)"
        (keydown.shift.i)="alphaFocus($event)"
        (keydown.shift.j)="alphaFocus($event)"
        (keydown.shift.k)="alphaFocus($event)"
        (keydown.shift.l)="alphaFocus($event)"
        (keydown.shift.m)="alphaFocus($event)"
        (keydown.shift.n)="alphaFocus($event)"
        (keydown.shift.o)="alphaFocus($event)"
        (keydown.shift.p)="alphaFocus($event)"
        (keydown.shift.q)="alphaFocus($event)"
        (keydown.shift.r)="alphaFocus($event)"
        (keydown.shift.s)="alphaFocus($event)"
        (keydown.shift.t)="alphaFocus($event)"
        (keydown.shift.u)="alphaFocus($event)"
        (keydown.shift.v)="alphaFocus($event)"
        (keydown.shift.w)="alphaFocus($event)"
        (keydown.shift.x)="alphaFocus($event)"
        (keydown.shift.y)="alphaFocus($event)"
        (keydown.shift.z)="alphaFocus($event)"
      />
      <button (click)="toggleExpanded()" >toggle listbox</button>
     <list-box *ngIf="expanded"></list-box>
    </div>
  ` 
})

export class ComboBox implements AfterViewInit {

  expanded: boolean = false; 

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  expand() {
    this.expanded = true;
  }

  collapse(){
    this.expanded = false;
  }

  alphaFocus() {
    //console.log(event, event.keyCode, event.keyIdentifier);
    console.log(event.key);
  }

}

@Component({
  selector: 'list-box',
  template: `
    <div tabindex="-1" role="listbox" [attr.aria-expanded]="expanded">
      <div *ngFor="let state of states" 
        #option 
        role="option"
        (keydown.ArrowDown)="focusNextOption()" 
        (keydown.ArrowUp)="focusPrevOption()" 
        tabindex="-1">{{state.name}}</div>
    </div>
  `,
  providers: [StateService]
})
export class ListBoxComponent { 

  @ViewChildren('option') options;

  focusIndex:number = 0;

  constructor(private stateService: StateService, private renderer: Renderer) { }
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
      if(this.focusIndex === (optionsLength - 1){
        this.focusIndex = -1;
      } else {
          this.focusIndex = this.focusIndex + 1;
          this.focusOption(this.focusIndex);
      }
      
    }, 0);

  }

  focusPrevOption() {
    let optionsLength: number = this.options._results.length;
    this.focusIndex = this.focusIndex - 1;
    this.focusOption(this.focusIndex);
  }

  ngOnInit(): void {
    this.getStates();
  }

  ngAfterViewInit() {
    this.focusOption(2);
  }

  

}

@Component({
  selector: 'loop-back',
  template: `
    <h2>Loop Back</h2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }


@Component({

  selector: "widget-demo",
  template: `
      <h1 *ngIf="notModal">A11y Angular2 Demo</h1>
      <aria-tooltip *ngIf="notModal">Loading...</aria-tooltip>
      <aria-accordion *ngIf="notModal">Loading...</aria-accordion>
      <aria-alert *ngIf="notModal">Loading...</aria-alert>
      <modal-open-button *ngIf="notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
      <combo-box *ngIf="notModal">Loading...</combo-box>
      <loop-back *ngIf="notModal">loading...</loop-back>
  `
})

export class WidgetDemoComponent {

  constructor(private titleService: Title, private renderer: Renderer) {}

  @ViewChild(ModalOpenButton)
  private modalButton: ModalOpenButton;

  ngAfterViewInit() {
      this.setTitle('A11y Widgets using Angular 2');
  }

  notModal:boolean = true;
 
  setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  enterModalContext(){
    this.notModal = false;
  }

  focusMe() { 
    this.modalButton.focusMe(); 
  }

  onCloseButtonActivated(){
     this.notModal = true;
     setTimeout( ()=>{ this.focusMe(); }, 0);//needed for the modalButton to be defined
  }

  onOpenButtonActivated(){
     this.notModal = false; 
  }

}


