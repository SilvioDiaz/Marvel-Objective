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
  pageNumbers:number
  currentPage: number = 1

  ngOnInit(): void {
    this.getCharacters()
    this.getPagesNumber()
  }

  pageChange(number: number) {//Requisição novos personagens ao trocar de pagina
    this.allCharacters = this.charactersSvc.getAllCharacters(number)
    .pipe(map((data:any) => data.data.results))
  }

  getCharacters(){ // Envia para allCharacters os valores da requisição com todos os personagens
    this.allCharacters = this.charactersSvc.getAllCharacters(this.currentPage)
    .pipe(map((data:any) => data.data.results))
  }

  getPagesNumber(){ //Requisição número total de paginas para o pagination
    this.charactersSvc.getAllCharacters(this.currentPage).subscribe(
      (data) => {
        this.pageNumbers = data.data.total
      }
    )
  }

}
