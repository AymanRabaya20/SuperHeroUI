import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  url = "SuperHero"

  constructor(private http:HttpClient) { }

  public getSuperHeroes():Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${environment.apiURL}/${this.url}`);//https://localhost:7091/api/SuperHero
  }

  public updateSuperHeroes(hero:SuperHero):Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${environment.apiURL}/${this.url}`,hero);
  }

  public deleteSuperHeroes(hero:SuperHero):Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiURL}/${this.url}/${hero.id}`);//https://localhost:7091/api/SuperHero/2
  }

  public createSuperHeroes(hero:SuperHero):Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${environment.apiURL}/${this.url}`,hero);
  }
}
