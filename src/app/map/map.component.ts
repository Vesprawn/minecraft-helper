import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Line } from '../models/line.model';
import { Location } from '../models/location.model';

export interface Point {
  x: number,
  y: number,
}

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input({required: true}) points!: Location[];
  @Input({required: true}) lines!: Line[];

  private ctx!: CanvasRenderingContext2D | null;

  width: number = window.innerWidth;
  height: number = window.innerHeight;

  offset: Point = {x: this.width /2, y: this.height / 2};

  mouseDownPoint: Point | null = null;

  zoomLevel: number = 1;


  ngOnChanges () {
    if (this.ctx) {
      this.draw();
    }
  }

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');

    if (this.ctx) {
      this.draw();
    }
  }

  getX (x: number) {
    return x * this.zoomLevel + this.offset.x;
  }

  getY (y: number) {
    return y * this.zoomLevel  + this.offset.y; 
  }

  sortLocations (locations: Location[]) {
    const zIndexLocations = locations.map((l: Location) => {
      return {
        ...l,
        zIndex: (l.zIndex) ? l.zIndex : 0
      }
    })

    return zIndexLocations.sort((a: Location, b: Location) => {
      if (a.zIndex && b.zIndex) {
        return a.zIndex - b.zIndex;
      } else if (a.zIndex) {
        return 1;
      } else if (b.zIndex) {
        return -1;
      } else {
        return 0;
      }
    })
  }

  draw () {
    this.ctx?.clearRect(0, 0, this.width, this.height);
    this.drawAxis();
    this.drawLines();
    this.drawPoints();
  }

  drawAxis () {
    const ctx = this.ctx!;

    ctx.beginPath();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.moveTo(this.getX(0), 0);
    ctx.lineTo(this.getX(0), this.height);
    ctx.moveTo(0, this.getY(0));
    ctx.lineTo(this.width, this.getY(0));
    ctx.stroke();

    ctx.closePath();
  }

  getCtx () {
    return this.ctx;
  }

  drawPoints () {
    if (!this.ctx) return;

    const sortedLocations = this.sortLocations(this.points);
    
    sortedLocations.forEach(point => {
      this.drawPoint(point);
      this.drawPointText(point);
    })
  }

  drawPoint (point: Location) {
    const ctx = this.getCtx();

    if (!ctx) return;

    ctx.fillStyle = point.color;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.getX(point.x), this.getY(point.y), 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }

  drawPointText (point: Location) {
    const ctx = this.getCtx();

    if (!ctx) return;

    ctx.fillStyle = 'white';
    ctx.font = '12px Arial';
    ctx.strokeStyle = 'black';
    ctx.lineWidth=3;

    if (point.textAnchor === 'right') {
      ctx.textAlign = point.textAnchor;
    } else if (point.textAnchor === 'bottom center') {
      ctx.textAlign = 'center';
    } else {
      ctx.textAlign = 'left'
    }

    ctx.textBaseline = 'middle';

    ctx.strokeText(point.name, this.getTextX(point), this.getTextY(point));
    ctx.fillText(point.name, this.getTextX(point), this.getTextY(point));
  }

  getTextX (point: Location) {
    if (point.textAnchor === 'right' ) return this.getX(point.x) - 14;
    if (point.textAnchor === 'bottom center') return this.getX(point.x)

    return this.getX(point.x) + 12;
  }

  getTextY (point: Location) {
    if (point.textAnchor === 'bottom center') return this.getY(point.y)+ 18

    return this.getY(point.y);
  }

  drawLines () {
    this.lines.forEach(line => {
      this.drawLine(line);
    })
  }

  drawLine (line: Line) {
    this.ctx!.beginPath();

    this.ctx!.strokeStyle = (line.color) ? line.color: 'white';

    if (line.color === 'grey') {
      this.ctx!.setLineDash([5, 5]);
    } else {
      this.ctx!.setLineDash([]);
    }

    this.ctx!.lineWidth = 2;

    this.ctx!.moveTo(this.getX(line.a.x), this.getY(line.a.y));
    this.ctx!.lineTo(this.getX(line.b.x), this.getY(line.b.y));
    this.ctx!.stroke();

    this.ctx!.closePath();
  }

  getMousePos (event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return { x: x, y: y };
  }

  onMouseWheel (event: WheelEvent) {
    if (event.deltaY > 0) {
      this.zoomLevel = this.zoomLevel + 0.05;
    } else {
      this.zoomLevel = this.zoomLevel - 0.05;
    }

    if (this.zoomLevel <= 0.05) {
      this.zoomLevel = 0.05;
    }

    this.draw();
  }

  onMouseMove (event: MouseEvent) { 
    if (!this.mouseDownPoint) return;

    const pos = this.getMousePos(event);


    this.offset = {
      x: this.offset.x + (pos.x - this.mouseDownPoint.x),
      y: this.offset.y + (pos.y - this.mouseDownPoint.y)
    }

    this.mouseDownPoint = pos;

    this.draw();
  }

  onMapClick (event: MouseEvent) {
   if (!this.ctx) return console.log('ctx is null');
   

    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.points = [
      ...this.points,
      {
        id: `${new Date().getTime()}`,
        x: x,
        y: y,
        color: 'red',
        name: 'test points mouse'  
      }
    ]

    this.draw();
  }

  onMouseDown (event: MouseEvent) {
    if (!this.ctx) return console.log('ctx is null');

    this.mouseDownPoint = this.getMousePos(event);
  }

  onMouseUp (event: MouseEvent) { 
    this.mouseDownPoint = null;
  }
}
