import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Champion, ChampionsInfo, LolInfos} from "./rotation";

@Injectable({
  providedIn: 'root'
})
export class LolApiService {

  constructor(private http : HttpClient) {

  }

  retrieveRota(){
    return this.http.get<LolInfos>("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-10e62a33-4d91-41be-add4-596f8bdda398");
  }

  retrieveChampionById(ids : Number[]){
    let championsName = Array<String>();
    let response = this.http.get<ChampionsInfo>("https://ddragon.leagueoflegends.com/cdn/12.5.1/data/fr_FR/champion.json");
    response.subscribe(val =>{
      console.log(val.data)
      console.log(ids)
      Object.keys(val.data).forEach(function (k){
        if(ids.includes(Number(val.data[k].key))){
          championsName.push(k);
        }
      })
    });
    return championsName;
  }

  retrieveBeginnerRota(){

  }
}
