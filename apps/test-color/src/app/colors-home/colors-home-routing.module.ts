import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsHomeomponent } from './colors-home.component';

const routes: Routes = [
  { path: '',  component: ColorsHomeomponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsHomeRoutingModule { }
