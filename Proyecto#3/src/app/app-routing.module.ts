import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { MonstersComponent } from './monsters/monsters.component';
import { SpellsComponent } from './spells/spells.component';
import { SplashComponent } from './splash/splash.component';
const routes: Routes = [ { path: "classes", component: ClassesComponent },
{ path: "monsters", component: MonstersComponent },
{ path: "splash", component: SplashComponent },
{ path: "spells", component: SpellsComponent },
{ path: "**", redirectTo: "splash" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
