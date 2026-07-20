import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  Liens: String[]=['Home','Produit','Blog','Contact','About'];
  isActive=true;
  isDisplayBox=false;
  toggleBox(){
    this.isDisplayBox=!this.isDisplayBox;
  }
}
