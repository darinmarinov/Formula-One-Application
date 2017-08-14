import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ConstructorsListService } from '../list-constructors-page/constructors-list.service'

@Component({
  selector: 'app-constructors-list-page',
  templateUrl: './constructors-list-page.component.html',
  styleUrls: ['./constructors-list-page.component.scss']
})
export class ConstructorsListPageComponent implements OnInit {

  constructors = [];

    constructor(private constructorsListServices: ConstructorsListService) {}
    ngOnInit(){

      this.constructorsListServices.getConstructors().subscribe(
        (resConstructorsData)=>{this.constructors=resConstructorsData.MRData.ConstructorTable.Constructors;
          console.log(this.constructors)})
        }
}
