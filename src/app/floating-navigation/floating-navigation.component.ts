import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Location } from '../models/location.model';

export interface Owner {
  id: string;
  name: string;
  color: string;
}

@Component({
  selector: 'app-floating-navigation',
  imports: [FormsModule],
  templateUrl: './floating-navigation.component.html',
  styleUrl: './floating-navigation.component.css'
})
export class FloatingNavigationComponent {
  @Output() savePoint = new EventEmitter<Location>();

  x: number = 0;
  y: number = 0;

  name: string = '';

  owners: Owner[] = [
    {
      id: 'shared',
      name: 'Shared',
      color: 'white'
    },
    {
      id: 'mike',
      name: 'Mike',
      color: 'magenta'
    },
    {
      id: 'elliot',
      name: 'Elliot',
      color: 'green',
    },
    {
      id: 'ellie',
      name: 'Ellie',
      color: 'blue',
    },
    {
      id: 'arthur',
      name: 'Arthur',
      color: 'yellow'
    },
    {
      id: 'tom',
      name: 'Tom',
      color: 'teal'
    }
  ]

  selectedOwner: Owner = this.owners[0];

  get netherX (): number {
    if (this.x === 0) return 0;

    return this.x / 8;
  }

  get netherY (): number {
    if (this.y === 0) return 0;
    
    return this.y / 8;
  }

  onSave () {
    this.savePoint.emit({
      id: `${new Date().getTime()}`,
      x: this.x,
      y: this.y,
      color: this.selectedOwner.color,
      name: this.name || 'New',
    });
  }
}
