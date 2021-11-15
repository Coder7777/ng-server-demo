import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from './home2.component';
import { Home2RoutingRoutes } from './home2-routing.module';
import { ComponentxComponent } from './componentx/componentx.component';
import { ComponentyComponent } from './componenty/componenty.component';
import { ComponentzComponent } from './componentz/componentz.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    Home2RoutingRoutes,
    IonicModule
  ],
  declarations: [Home2Component, ComponentxComponent, ComponentyComponent, ComponentzComponent]
})
export class Home2Module { }
