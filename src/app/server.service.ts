import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  PUBLIC_KEY = "2f0e2b310aa04fc38db5a244787671a6"
  TIME_STAMP = "1626905702"
  HASH = "4ea7f3a87a87891d7e47375c5b4fe3ad"
  URL_API = `https://gateway.marvel.com`

  AUTH = `?ts=${this.TIME_STAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`


  constructor(private http: HttpClient) { }

  getAllCharacters(page:number,search:string):Observable<any>{ //Requisição de lista com todos os personagens
    let offSet:number
    let params:any

    if(page > 1){ //Se não for primeira pagina
      offSet = (page * 5) - 5
    }else{ //Caso seja primeira pagina, começa a requisição do começo
      offSet = 0
    }

    let data = { //Parametro para requisição geral
      limit:5,
      offset:offSet
    }

    let searchData = { // Parametros para busca de personagem
      limit:5,
      offset:offSet,
      nameStartsWith:search
    }

    if(search){
      params = new HttpParams({fromObject:searchData})
    }else{
      params = new HttpParams({fromObject:data})
    }

    
    return this.http.get<any>(`${this.URL_API}/v1/public/characters${this.AUTH}`, {params:params})   

  }

  getCharacterDetails(id:string):Observable<any>{ //Requisição de detalhes do personagem pelo ID
    return this.http.get<any>(`${this.URL_API}/v1/public/characters/${id}?${this.AUTH}`)
    .pipe(map((data:any) => data.data.results))
  }

  getCharacterEvents(id:string): Observable<any> {
    let params = new HttpParams().set('characters', id)

    return this.http.get<any>(`${this.URL_API}/v1/public/events${this.AUTH}`, {params:params})
    .pipe(map((data:any) => data.data.results))
  }

}
