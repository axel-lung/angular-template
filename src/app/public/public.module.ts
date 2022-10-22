import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule,]
})
export class PublicModule { }
