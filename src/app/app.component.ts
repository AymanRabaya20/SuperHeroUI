import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[]=[];
  heroToEdit: SuperHero | undefined;

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit(): void{
    this.loadHeroes();
  }
  
  ngOnChange():void{
    console.log("Inside on change")
    this.loadHeroes();
  }

  heroesDelete(hero:SuperHero){
    this.superHeroService.getSuperHeroes()
      .subscribe((heroes: SuperHero[]) => {
        this.heroes = heroes;
      });
  }

   loadHeroes() {
    // Fetch the updated list of heroes from the service
     this.superHeroService.getSuperHeroes()
      .subscribe((heroes: SuperHero[]) => {
        this.heroes = heroes;
      });
  }

  updateHeroList(heroes :SuperHero[]){
    this.heroes = heroes;
  }

  public initNewHero(){
    this.heroToEdit = new SuperHero();

  }

  public editHero(hero:SuperHero){
    this.heroToEdit = hero;
  }


}
