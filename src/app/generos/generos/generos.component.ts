import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/Api/deezer.service';


@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  genres:any;
  constructor(private genre: DeezerService) { }

  ngOnInit(): void {
    this.getGenre()
  }
   getGenre(){
    this.genre.getGenero().subscribe
    ({   
       next:(s)=>{
         this.genres=s.data;
         //console.log(this.genres)
       },
       error:(e)=>{
       debugger
       }
    })

   }
}
