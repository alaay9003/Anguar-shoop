import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SelectComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],

  exports: [HeaderComponent, SelectComponent, FormsModule],
})
export class SharedModule {}
