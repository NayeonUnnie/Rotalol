export interface LolInfos {
  freeChampionIds:              number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel:            number;
}

export interface ChampionsInfo {
  type:    string;
  format:  string;
  version: string;
  data:    { [key: string]: Champion };
}

export interface Champion {
  version: string;
  id:      string;
  key:     string;
  name:    string;
  title:   string;
  blurb:   string;
  info:    string;
  image:   Image;
  tags:    string[];
  partype: string;
  stats:   { [key: string]: number };
}

export interface Image{
  full:   string;
  sprite: string;
  group:  string;
  x:      number;
  y:      number;
  w:      number;
  h:      number;
}
