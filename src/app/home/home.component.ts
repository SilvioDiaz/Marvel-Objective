import { Component,ViewChild } from '@angular/core';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(CharactersComponent ) child: CharactersComponent ; 

  search(text:string){
    this.child.searchHero(text)
  }

}
