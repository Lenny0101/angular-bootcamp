import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'auth', pathMatch:'full'},
  // {path: '', loadChildren: './authentication/authentication.module#AuthenticationModule', canLoad: []},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ 
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
