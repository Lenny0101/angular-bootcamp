import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserGuard} from './shared/guards/user.guard';
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'feed', loadChildren: './feed/feed.module#FeedModule', canLoad: [AuthGuard]},
    {path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canLoad: [UserGuard]},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
