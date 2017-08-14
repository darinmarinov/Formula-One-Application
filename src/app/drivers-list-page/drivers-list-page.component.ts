import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DriversListService } from '../drivers-list-page/drivers-list.service'

@Component({
  selector: 'app-drivers-list-page',
  templateUrl: './drivers-list-page.component.html',
  styleUrls: ['./drivers-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DriversListPageComponent implements OnInit {

  drivers = [];

    constructor(private driverListServices: DriversListService) {}
    ngOnInit(){

      this.driverListServices.getDriver().subscribe(
        (resDriverData)=>{this.drivers=resDriverData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          console.log(this.drivers)})
        }
}
