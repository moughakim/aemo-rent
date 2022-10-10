import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  {
    path: 'robes', component: MainComponent
  },
  {
    path: 'reservations', component: ReservationsComponent
  },
  { path: 'default', component: MainComponent },
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
