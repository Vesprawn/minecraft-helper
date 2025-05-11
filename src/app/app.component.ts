import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { Location, locations } from './models/location.model';
import { FloatingNavigationComponent } from './floating-navigation/floating-navigation.component';
import { ViewChild } from '@angular/core';
import { Line, lines } from './models/line.model';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MapComponent, FloatingNavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('test') test!: MapComponent;

  title = 'minecraft-helper';
  points: Location[] = locations;

  lines: Line[] = lines;
 
  savePoint (newPoint: Location) {
    this.points = [
      ...this.points,
      newPoint
    ]

    this.test.draw();
  }
}
