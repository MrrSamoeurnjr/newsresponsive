import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.css'
})
export class DomainComponents implements OnInit{
  constructor(private _service: NewsapiservicesService){}
  topdomainDisplayData: any = []
  ngOnInit(): void {
    this._service.domainHeading().subscribe((result)=> {
      this.topdomainDisplayData = result.articles
    })
  }
}
