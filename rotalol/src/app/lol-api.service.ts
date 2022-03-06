import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChampionsInfo, LolInfos} from "./rotation";

@Injectable({
  providedIn: 'root'
})
export class LolApiService {

  constructor(private http : HttpClient) {

  }

  retrieveRota(){
    return this.http.get<LolInfos>("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-3ee882dc-7869-457e-af12-0d48de938b5b");
  }

  retrieveChampionById(ids : Number[]){
    let championsName = Array<Array<String>>();
    let response = this.http.get<ChampionsInfo>("https://ddragon.leagueoflegends.com/cdn/12.5.1/data/fr_FR/champion.json");
    response.subscribe(val =>{
      Object.keys(val.data).forEach(function (k){
        if(ids.includes(Number(val.data[k].key))){
          let pair = Array<String>();
          pair.push(k)
          console.log(val.data[k].image.full)
          pair.push("https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/" + val.data[k].image.full)
          championsName.push(pair);
        }
      })
    });
    return championsName;
  }

  retrievePictureUrl(champion : String){
    return  + champion;
  }
}
