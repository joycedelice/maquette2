import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [NgClass],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article { 
  count: number=0;
  incrementCount() {
    this.count++;
  }
  decrementCount() {
    this.count--;
  }

}
