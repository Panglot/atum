import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ClashComponent } from './modules/clash/clash.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { routeName: 'HOME' } },
  { path: 'clash-royale', component: ClashComponent, data: { routeName: 'CLASH APP'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
