import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "aria-alert",
  template: `
      <h2>Alert</h2>
      <p>Alerts will appear below and be announced to screen readers assertively</p>
      <div id="alertLiveRegion" role="alert">{{alertText}}</div>
      <button id="alertButton" href="#" (click)="stopAlerts()" aria-controls="alertLiveRegion">Stop Alerts</button>
  `,
  styles:[`
      #alert { width:500px; margin:50px auto; } 
      #alertButton { display:block; margin-top:20px; } 
      #alertLiveRegion { margin-top:10px; } 
   `],
})

export class AlertComponent {

    constructor(private titleService: Title){}
    alertText: string = "This is a live region, the alert text will appear here dynamically";
    alertsOn: boolean = true;
    intervalId: any; 
    stopAlerts() {
        this.alertsOn = false;
    }

    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
  
    ngAfterViewInit() {

        let cnt = 0;
        this.setTitle('Alerts');  
        this.intervalId =  setInterval(()=>{
        this.alertText = "alert " + cnt;
        cnt = cnt + 1;

        if(this.alertsOn == false){ clearInterval(this.intervalId);}
  
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

}


