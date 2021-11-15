import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './componentc/componentc.component';
import { IonicModule } from '@ionic/angular';
import { Home1PageRoutingModule } from './home1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Home1PageRoutingModule
  ],
  declarations: [Home1Component, ComponentaComponent, ComponentbComponent, ComponentcComponent]
})
export class Home1Module { }
