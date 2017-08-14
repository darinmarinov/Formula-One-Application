import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent   {
 constructor(private activatedRoute: ActivatedRoute){
 }
}
