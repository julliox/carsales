import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'multiselect-autocomplete-exemple',canActivate: [AuthGuardService], loadChildren: () =>
  import("./views/multiselect-autocomplete-example/multiselect-autocomplete-exemple.module").then(m => m.MultiselectAutocompleteExampleModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
