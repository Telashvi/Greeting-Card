import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ShowCardComponent } from './components/show-card/show-card.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sing-up' },
  { path:'sing-up', component: SingUpComponent},
  { path: 'card', component: CardComponent },
  { path: 'show-card', component: ShowCardComponent },

]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
