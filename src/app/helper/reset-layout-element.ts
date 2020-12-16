import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FooterNavigationService } from './footer-navigation.service';
import { PageTitleService } from './page-title.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ResetLayoutService {
    constructor(private fns: FooterNavigationService, private pts: PageTitleService) {
       
    }
    init(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddSiteBtnStatus = true;
        this.pts.showSiteDetails = true;
    }

    initWithSiteDetails(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddSiteBtnStatus = true;
        this.pts.showSiteDetails = false;
    }

    initDashboard(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddSiteBtnStatus = false;
        this.pts.showSiteDetails = true;
    }
}