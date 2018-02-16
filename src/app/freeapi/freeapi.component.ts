import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../freeapi.service';

@Component({
  selector: 'app-freeapi',
  templateUrl: './freeapi.component.html',
  styleUrls: ['./freeapi.component.css']
})
export class FreeapiComponent implements OnInit {
	siteData: any[];

  constructor(private httpas: FreeapiService) { }

  ngOnInit() {
  	this.httpas.getData().subscribe((data) =>{
  		this.siteData = data;
  	});
  }

}
