import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from "@angular/material/tree";
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatTreeModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatTreeModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
