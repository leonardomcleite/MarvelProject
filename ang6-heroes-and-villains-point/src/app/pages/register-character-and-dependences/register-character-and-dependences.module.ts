import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { RegisterCharacterAndDependencesRoutingModule } from './register-character-and-dependences-routing.module';
import { RegisterCharacterAndDependencesComponent } from './register-character-and-dependences.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterCharacterAndDependencesRoutingModule,

    MatButtonModule
  ],
  declarations: [
    RegisterCharacterAndDependencesComponent
  ],
  exports: [
    RegisterCharacterAndDependencesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterCharacterAndDependencesModule { }
