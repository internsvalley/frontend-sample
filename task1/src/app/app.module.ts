import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
   declarations: [
      AppComponent,
      FilterComponent,
      CheckboxComponent,
      CardComponent,
      CarouselComponent
   ],
   imports: [
      BrowserModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
