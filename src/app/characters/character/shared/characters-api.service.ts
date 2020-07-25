import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient }from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = 'a4fb0685a6b2430b54f97ddd3fb28327';
  HASH = '18cb2dcdb4b5902ea2d1dfd9d71946fb';
  TS = '1595465805';
  
  
  
   constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    
    let URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    console.log(URL_API);
    return this.http.get<any>(URL_API)
    .pipe(map((data: any) => data.data.results))
}

}
