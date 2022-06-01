import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeezerService {


  constructor(private http:HttpClient) { }

  apiURL="https://api.deezer.com/"; 

  getMusic(nombre:string){
    return this.http.get<any>(this.apiURL+"search?q="+nombre);
  }
  getGenero(){
    return this.http.get<any>(this.apiURL+"genre");
  }

  getAlbumForArtist(idArtista:number){
    return this.http.get<any>(this.apiURL+"artist/"+idArtista+"/albums");
  }
  getTrackAlbum(idalbum:number){
  
    return this.http.get<any>(this.apiURL+"album/"+idalbum+"/tracks");
  }
}


