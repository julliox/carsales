import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiselectAutocompleteExampleComponent } from './multiselect-autocomplete-example.component';

const routes: Routes = [{path:'', component:MultiselectAutocompleteExampleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiselectAutocompleteExampleRouting { }