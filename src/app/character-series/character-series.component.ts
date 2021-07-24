import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.css']
})
export class CharacterSeriesComponent implements OnInit {

  constructor(private seriesSvc:ServerService, private route:ActivatedRoute) { }

  ReqSeries: Observable<any>
  characterSeries:Observable<any>
  countSeries:number
  id:string = this.route.snapshot.params.id

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries(){
    this.ReqSeries = this.seriesSvc.getCharacterSeries(this.id) //Recebe requisição de series

    this.ReqSeries.subscribe(x => { //Recebe contagem de de series do personagem
      this.countSeries = x.count
    })

    this.characterSeries = this.ReqSeries.pipe(map((data:any) => data.results)) //Recebe series de personagem

  }

}
