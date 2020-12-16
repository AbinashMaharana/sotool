import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from 'src/app/helper/page-title.service';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';

import { FooterNavigationService } from '../../../helper/footer-navigation.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {
  public siteDetailsForm: FormGroup;
  public customerDetails: any[];
  public isSiteExist: boolean;
  public isDuplicate: boolean;
  constructor(private fb: FormBuilder, private fns: FooterNavigationService, private pts: PageTitleService, private rls: ResetLayoutService) {
    rls.init();

    fns.getNextBtnStatus.subscribe(event => {
      if (event) {
        this.submit();
      }

    });

    this.customerDetails = [
      {
        sessionId: "",
        cusotmerName: "AT&T",
        sitescount: "20",
        sites: [
          {
            sitename: "wqew",
            siteaddress: "qwoieoqw",
            configurationStatus: "true/false"
          },
          {
            sitename: "wqew",
            siteaddress: "qwoieoqw",
            configurationStatus: "true/false"
          }
        ]
      }
    ];

  }

  ngOnInit(): void {
    this.siteDetailsForm = this.fb.group({
      customerName: ['', Validators.required],
      siteName: ['', Validators.required]
    });


    this.fns.setNextBtnVisibleStatus = true;
  }

  get formControls() { return this.siteDetailsForm.controls; }
  get customersList() { return this.customerDetails; }

  validateSiteName(customer) {

    this.customerDetails.filter(e => {
      e.sites.filter(s => {
        if (e.cusotmerName == customer) {
          this.isSiteExist = false;
          if (s.sitename === this.siteDetailsForm.value.siteName) {
            this.isSiteExist = true;
            return true;
          }
        }
      })
    });

  }

  isValidForm() {

    if (this.siteDetailsForm.valid) {

      if (this.isSiteExist) {
        this.isDuplicate = true;
        this.fns.setNextBtnVisibleStatus = true;
      } else {
        this.isDuplicate = false;
        this.fns.setNextBtnVisibleStatus = false;
      }

    } else {
      this.fns.setNextBtnVisibleStatus = true;
    }

  }

  submit() {
    console.log(this.siteDetailsForm.value);
  }
}
