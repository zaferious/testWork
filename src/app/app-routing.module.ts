import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';


const routes: Routes = [
  {
    path: 'firstPage', component: FirstPageComponent
  },
  {
    path: 'secondPage', component: SecondPageComponent
  },
  {
    path: '', redirectTo: '/firstPage', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/firstPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
