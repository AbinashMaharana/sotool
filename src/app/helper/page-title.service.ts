import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class PageTitleService {

    private showAddSiteBtn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private showSiteDetail: BehaviorSubject<boolean> = new BehaviorSubject(true);
    constructor() { }

    set setAddSiteBtnStatus(btnStatus) {

        this.showAddSiteBtn.next(btnStatus)
    }


    get getAddSiteBtnStatus(): Observable<boolean> {
        return this.showAddSiteBtn.asObservable();
    }

    set showSiteDetails(btnStatus) {

        this.showSiteDetail.next(btnStatus)
    }


    get getshowSiteDetails(): Observable<boolean> {
        return this.showSiteDetail.asObservable();
    }
}
