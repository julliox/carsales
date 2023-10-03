import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MultiselectAutocompleteExampleRouting } from './multiselect-autocomplete-exemple-routing.module';
import { MultiselectAutocompleteExampleComponent } from './multiselect-autocomplete-example.component';


@NgModule({
  declarations: [
    MultiselectAutocompleteExampleComponent
  ],
  imports: [
    CommonModule,
    MultiselectAutocompleteExampleRouting,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    MultiselectAutocompleteExampleComponent
  ]
})
export class MultiselectAutocompleteExampleModule { }