import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EventAddComponent } from './event-add/event-add.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DenunciaAddComponent } from './denuncia-add/denuncia-add.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';
import { DenunciasComponent } from './denuncias/denuncias.component';


//Declaración de rutas para añadir navegación entre componentes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'detailEvent/:id', component: EventDetailComponent },
  { path: 'detailUser/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventAdd', component: EventAddComponent },
  { path: 'userAdd', component: UserAddComponent },
  { path: 'denuncias', component: DenunciasComponent },
  { path: 'detailDenuncia/:id', component: DenunciaDetailComponent },
  { path: 'denunciaAdd', component: DenunciaAddComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
