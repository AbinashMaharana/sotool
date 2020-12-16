import { Component, OnInit } from '@angular/core';

import { FooterNavigationService } from '../../helper/footer-navigation.service';

@Component({
  selector: 'so-footer',
  templateUrl: './so-footer.component.html',
  styleUrls: ['./so-footer.component.css']
})
export class SoFooterComponent implements OnInit {
  public nxtBtn: boolean = true;
  public prevBtn: boolean;

  constructor(private fns: FooterNavigationService) {
    fns.getNextBtnVisibleStatus.subscribe((event) => {
      this.nxtBtn = event;
    })
  }

  ngOnInit(): void {
  }
  
  prev() {
    this.fns.setPrevBtnStatus = true;
  }
  next() {
    this.fns.setNextBtnStatus = true;
  }
}
