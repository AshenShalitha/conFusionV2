import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule],
})
export class MaterialModule { }