import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routing/routing.module';
import { DriversListService } from './drivers-list-page/drivers-list.service'
import { ConstructorsListService } from './list-constructors-page/constructors-list.service'


import { AppComponent } from './app.component';
import { DriversListPageComponent } from './drivers-list-page/drivers-list-page.component';
import { ListCircuitsPageComponent } from './list-circuits-page/list-circuits-page.component';
import { ConstructorsListPageComponent } from './list-constructors-page/constructors-list-page.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversListPageComponent,
    ListCircuitsPageComponent,
    ConstructorsListPageComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DriversListService,ConstructorsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
