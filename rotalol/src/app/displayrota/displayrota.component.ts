import { Component, OnInit } from '@angular/core';
import {LolApiService} from "../lol-api.service";
import {LolInfos} from "../rotation";

@Component({
  selector: 'app-displayrota',
  templateUrl: './displayrota.component.html',
  styleUrls: ['./displayrota.component.css'],
  providers: [LolApiService]
})
export class DisplayrotaComponent implements OnInit {

  tableChampions = Array<Number>();
  beginTableChampions = Array<Number>();
  tableChampionsName = Array<String>();

  constructor(private lolApiService : LolApiService) {
    this.loadRota()
  }

  ngOnInit(): void {

  }

  loadRota(){
    this.lolApiService.retrieveRota()
      .subscribe(data =>  {
        this.tableChampions = data.freeChampionIds
        this.beginTableChampions = data.freeChampionIdsForNewPlayers
        this.tableChampionsName = this.lolApiService.retrieveChampionById(this.tableChampions);
      });
  }

  loadBeginnerRota(){

  }

}
