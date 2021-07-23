import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-events',
  templateUrl: './character-events.component.html',
  styleUrls: ['./character-events.component.css']
})
export class CharacterEventsComponent implements OnInit {

  constructor(private eventsSvc:ServerService, private route:ActivatedRoute) { }

  characterEvents: Observable<any>
  id:string = this.route.snapshot.params.id

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.characterEvents = this.eventsSvc.getCharacterEvents(this.id)

  }

}
