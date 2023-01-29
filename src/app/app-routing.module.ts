import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogMaleComponent } from './pages/catalog-male/catalog-male.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'male', component: CatalogMaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
