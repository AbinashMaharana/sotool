import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { SidebarService } from 'src/app/helper/sidebar.service';
import { NavItem } from 'src/app/models/NavItem';


@Component({
  selector: 'so-navigation',
  templateUrl: './so-navigation.component.html',
  styleUrls: ['./so-navigation.component.css']
})
export class SoNavigationComponent implements OnInit {
  @Output()
  toggle: EventEmitter<any> = new EventEmitter();
  pinMenuSubscription: Subscription;
  isPinned: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.pinMenuSubscription = sidebarService.getPinStatus.subscribe(event => {
      this.isPinned = event;
    });
  }

  ngOnInit(): void {
  }

  toggleMenu($event) {
    // console.log($event);
    if (!this.isPinned) {
      this.toggle.emit($event);
    }
  }

  mainNavMenuList: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'globe',
      route: '/dashboard',
      submenu: false,
    },
    {
      displayName: 'Site Planning',
      iconName: 'globe',
      route: '/site_planning/site_requirement/site_details',
      submenu: true
    }
  ];
}
