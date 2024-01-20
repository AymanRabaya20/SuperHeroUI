import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  @Input() hero?:SuperHero;
  @Input() reloadData?: () => void; // Input to trigger data reload
  @Output()heroesUpdate = new EventEmitter<SuperHero[]>();
  @Output()heroesDelete = new EventEmitter<number>();

  constructor(private superHeroService : SuperHeroService) {  }

  updateHero(hero: SuperHero) {
    this.superHeroService.updateSuperHeroes(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesUpdate.emit(heroes);
        if (this.reloadData) {
          this.reloadData(); // Call the parent component's method to reload data
        }
      });
  }

  createHero(hero: SuperHero) {
    this.superHeroService.createSuperHeroes(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesUpdate.emit(heroes);
        window.location.reload();
        // if (this.reloadData) {
        //   this.reloadData(); // Call the parent component's method to reload data
        // }
      });
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService.deleteSuperHeroes(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.heroesDelete.emit(hero.id);
        window.location.reload();
          // this.reloadData(); // Call the parent component's method to reload data

      });
  }
}
