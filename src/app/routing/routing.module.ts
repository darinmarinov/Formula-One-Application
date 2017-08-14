import { RouterModule, Routes } from '@angular/router';
import { driverListRouter } from '../drivers-list-page/driver-list-router-config';
import { listCircuitsRouter } from "app/list-circuits-page/list-circuits-router-config";
import { constructorsListRouter } from '../list-constructors-page/constructors-list-router-config'
import { driverRoute } from '../driver/driver-router-config';

export const routes:Routes=[
  ...driverListRouter,
  ...listCircuitsRouter,
  ...constructorsListRouter,
  ...driverRoute,
  {
        path: '',
        redirectTo: '/driver-list',
        pathMatch: 'full'
  }
]

export const routing=RouterModule.forRoot(routes);
