import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Contenido1Component } from './contenido1.component';
import { Contenido2Component } from './contenido2.component';
import { Contenido3Component } from './contenido3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, 
    Contenido1Component,
    Contenido2Component,
    Contenido3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
