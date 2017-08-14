import { Component } from '@angular/core';
import { DriversListPageComponent } from '../drivers-list-page/drivers-list-page.component';
import { driverRoute } from "app/driver/driver-router-config";
export const driverListRouter = [
    {
     path:'driver-list',
     component:DriversListPageComponent,
     children:[
         ...driverRoute
     ]
    }
]