import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.component.html',
  styleUrl: './techcrunch.component.css'
})
export class TechcrunchComponent implements OnInit{
  constructor(private _service: NewsapiservicesService){}
  topcrunechDisplayData: any = []
  ngOnInit(): void {
    this._service.techcrunceHeading().subscribe((result) => {
      this.topcrunechDisplayData = result.articles
  })
  }
}
