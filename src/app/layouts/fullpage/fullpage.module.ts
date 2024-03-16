import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageComponent } from './fullpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from '../../modules/login/login.component';



@NgModule({
  declarations: [
    FullpageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullpageModule { }
