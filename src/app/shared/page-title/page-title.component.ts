import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageTitleService } from '../../helper/page-title.service';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  siteDetails: any;
  showSiteBtn: boolean;
  showSiteDetail: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private pts: PageTitleService) {
    pts.getAddSiteBtnStatus.subscribe(event => {
      this.showSiteBtn = event;
      console.log(event);
    })
    pts.getshowSiteDetails.subscribe(event => {
      this.showSiteDetail = event;
      console.log(event);
    })
  }

  ngOnInit(): void {
    this.siteDetails = {
      customer: "TMobile",
      siteName: "Bancroft Airport Deployments",
      location: "Bancroft Airport, John Fitch Boulevard, East Bancroft Airport, John Fitch Boulevard, East Bancroft Airport"
    }
  }
  addNewSite() {
    this.router.navigate(['/site_planning/site_requirement/site_details'], { relativeTo: this.route });
  }
}
