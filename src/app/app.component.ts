import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { Location } from './map/map.component';
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
  points: Location[] = [
    {
      id: 'test1',
      x: 240,
      y: 360,
      color: 'white',
      name: 'Shulker Farm',
    },
    {
      id: 'test2',
      x: 0,
      y: 0,
      name: 'Spawn',
      color: 'red',
      textAnchor: 'bottom center'
    },
    {
      id: 'test3',
      x: 904,
      y: 104,
      name: 'Mike\'s Base',
      color: 'magenta',
      textAnchor: 'bottom center'
    },
    {
      id: 'test4',
      x: 1160,
      y: -1400,
      name: 'Stronghold',
      color: 'white',
    },
    {
      id: 'test5',
      x: -8,
      y: -4320,
      name: 'Elliot\'s Base',
      color: 'green'
    },
    {
      id: 'test6',
      x: -4400,
      y: 2000,
      name: 'Arthur\'s Base',
      color: 'yellow',
      textAnchor: 'right'
    },
    {
      id: 'test7',
      x: -216,
      y: 48,
      name: 'Tom\'s Base',
      color: 'teal',
      textAnchor: 'bottom center'
    },
    {
      id: 'test8',
      x: -448,
      y: -2024,
      name: 'Fortress A',
      color: 'white',
      textAnchor: 'right'
    },
    {
      id: 'test9',
      x: -5920,
      y: 2800,
      name: 'Fortress B',
      color: 'white',
      textAnchor: 'right'
    },
    {
      id: 'test10',
      x: -544,
      y: 480,
      name: 'Ancient City A',
      color: 'magenta',
      textAnchor: 'right'
    },
    {
      id: 'test11',
      x: 2200,
      y: -240,
      name: 'Underwater Temple',
      color: 'magenta',
    },
    {
      id: 'test12',
      x: 2760,
      y: 560,
      name: 'Creeper Farm',
      color: 'magenta'
    },
    {
      id: 'test13',
      x: 240,
      y: 200,
      name: 'Dungeon A',
      color: 'white',
      textAnchor: 'bottom center'
    },
    {
      id: 'test14',
      x: 760,
      y: 168,
      name: 'Dungeon B',
      color: 'white',
      textAnchor: 'bottom center'
    }
  ]

  lines: Line[] = lines;
 
  savePoint (newPoint: Location) {
    this.points = [
      ...this.points,
      newPoint
    ]

    console.log('points', this.points)
    this.test.draw();
  }
}
