import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Main } from '../main/main';

@Component({
  selector: 'app-container',
  imports: [Nav, Main],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
