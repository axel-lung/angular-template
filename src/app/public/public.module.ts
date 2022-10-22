import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
