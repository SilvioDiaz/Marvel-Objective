import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-character-events',
  templateUrl: './character-events.component.html',
  styleUrls: ['./character-events.component.css']
})
export class CharacterEventsComponent implements OnInit {

  constructor(private eventsSvc:ServerService, private route:ActivatedRoute) { }

  ReqEvents: Observable<any>
  characterEvents:Observable<any>
  countEvents:number
  id:string = this.route.snapshot.params.id

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.ReqEvents = this.eventsSvc.getCharacterEvents(this.id) //Recebe requisição de eventos

    this.ReqEvents.subscribe(x => { //Recebe contagem de de eventos do personagem
      this.countEvents = x.count
    })

    this.characterEvents = this.ReqEvents.pipe(map((data:any) => data.results)) //Recebe eventos de personagem

  }

}
