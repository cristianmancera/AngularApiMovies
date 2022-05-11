import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PosterPipe } from '../pipes/poster.pipe';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
