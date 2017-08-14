import { Component, OnInit } from '@angular/core';
import { Circuits } from 'app/list-circuits-page/Circuits'
import { ListCircuitsServices } from 'app/list-circuits-page/list-circuits-page.services'

@Component({
  selector: 'app-list-circuits-page',
  templateUrl: './list-circuits-page.component.html',
  styleUrls: ['./list-circuits-page.component.scss'],
  providers: <any>[ListCircuitsServices]
})
export class ListCircuitsPageComponent implements OnInit {

   constructor(private listCircuitsService:ListCircuitsServices) {
    
    }
  
  private circuits=[];
  private errorMessage:any = '';

  getCircuitsData() {
    this.listCircuitsService.getData()
        .subscribe(
            (circuits)=>{this.circuits=circuits.MRData.CircuitTable.Circuits;console.log(this.circuits)},
            error => this.errorMessage = <any>error
        )
   }
  ngOnInit() {
      this.getCircuitsData();
  }

}
