import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/Api/deezer.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  busqueda:Array<any> = [];
  album:any;
  track:any;
  infoArtist:boolean = false;

  constructor(private search:DeezerService) { }

  ngOnInit(): void {
    this.getMusic("zedd")
   }


   getMusic(name:any){
    let d;
    if(name.value){
      d=name.value;
    } else{
      d=name;
    }
      this.search.getMusic(d).subscribe({
      next:(s:any)=>{
        this.busqueda = s.data;
        this.infoArtist = true;
        this.getAlbumforartist(this.busqueda[0].artist.id);
        
      },
      error: (e)=>{
        debugger
      }
    })

  }

  getAlbumforartist(idartista:number){
    this.search.getAlbumForArtist(idartista).subscribe({
      next: (s) =>{
       this.album=s.data;
       //this.getTrack(this.album.id);
      },
      error: (e)=>{
        debugger
      },

    })
  }


  getTrack(id:number){
    this.search.getTrackAlbum(id).subscribe({
      next: (s) =>{
        debugger
       this.track=s.data;
       debugger
       },
       error: (e)=>{
         debugger
       },
    })
  }

}