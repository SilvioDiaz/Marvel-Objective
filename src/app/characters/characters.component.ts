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
  characters:Observable<any>
  pageNumbers:number
  currentPage: number = 1
  heroName: string

  ngOnInit(): void {
    this.getCharacters()
  }

  getObservable(){ //Chama  número de paginas e guarda dados de personagens
    this.getPagesNumber()
    this.characters = this.allCharacters.pipe(map((data:any) => data.results))
  }

  getPagesNumber(){ // Recebe total de paginas de AllCharacters
    this.allCharacters.subscribe(x => {
      this.pageNumbers = x.total
    })
  }

  //REQUISIÇÕES

  searchHero(text:string){//Requisição com pesquisa de nome do herói
    this.heroName = text

    this.allCharacters = this.charactersSvc.getAllCharacters(this.currentPage,text)
    .pipe(map((data:any) => data.data))

    this.getObservable()
  }

  pageChange(number: number) {//Requisição novos personagens ao trocar de pagina
    this.allCharacters = this.charactersSvc.getAllCharacters(number,this.heroName)
    .pipe(map((data:any) => data.data))

    this.getObservable()
  }

  getCharacters(){ // Envia para allCharacters os valores da requisição com todos os personagens
    this.allCharacters = this.charactersSvc.getAllCharacters(this.currentPage,this.heroName)
    .pipe(map((data:any) => data.data))

    this.getObservable()
  }

}
