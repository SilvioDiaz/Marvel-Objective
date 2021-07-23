import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersSvc:ServerService) { }

  allCharacters: Observable<any>

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){ // Envia para allCharacters os valores da requisição com todos os personagens
    this.allCharacters = this.charactersSvc.getAllCharacters()
    .pipe(map((data:any) => data.data.results))
  }

}
