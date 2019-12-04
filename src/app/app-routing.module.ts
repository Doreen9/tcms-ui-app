import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
