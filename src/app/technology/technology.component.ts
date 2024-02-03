import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit{
  constructor(private _service: NewsapiservicesService)
  {

  }
  techDisplayData: any = []
  ngOnInit(): void {
      this._service.techHeading().subscribe((result) => {
        console.log(result)
        this.techDisplayData = result.articles
      })
  }
}
