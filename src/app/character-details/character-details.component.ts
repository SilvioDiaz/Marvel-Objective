import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private detailsSvc:ServerService, private route:ActivatedRoute ) { }

  characterDetails: Observable<any>
  id:string = this.route.snapshot.params.id

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.characterDetails = this.detailsSvc.getCharacterDetails(this.id)
  }
}
