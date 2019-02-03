import { Component, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector:"qs-canvas",
    templateUrl:'./canvas.component.html'
})
export class CanvasComponent{

    mouseX:string;
    mouseY:string;
    @ViewChild("myCanvas") myCanvas:ElementRef;   
    myCanvascontext;
    constructor(){
        
    }
    
    ngAfterViewInit(){
        this.myCanvascontext=(<HTMLCanvasElement>this.myCanvas.nativeElement).getContext("2d");
        
        this.myCanvascontext.fillStyle="#FF0000";
        this.myCanvascontext.fillRect(0,0,150,75);
    }

    getMouseCoordinates($event){
        this.mouseX=$event.offsetX;
        this.mouseY=$event.offsetY;
    }

}