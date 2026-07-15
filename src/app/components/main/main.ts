import { Component } from '@angular/core';
import { Article } from '../article/article';
import { AsideContainer } from '../aside-container/aside-container';

@Component({
  selector: 'app-main',
  imports: [ Article, AsideContainer],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
