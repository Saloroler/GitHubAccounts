import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutAppComponent } from './components/about-app/about-app.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent  },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutAppComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule]
})
export class AppRootingModule { }

