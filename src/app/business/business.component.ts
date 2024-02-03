import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent implements OnInit{
  constructor(private _service: NewsapiservicesService)
  {

  } 
  businessDisplayData: any = 0
  ngOnInit(): void {
      this._service.businessHeading().subscribe((result)=> {
        console.log(result)
        this.businessDisplayData = result.articles
      })
  }
}
