import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [NavbarComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        FontAwesomeModule
    ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NavbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
