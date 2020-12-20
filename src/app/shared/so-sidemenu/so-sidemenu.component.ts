import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SideMenuService } from 'src/app/helper/sidemenu.service';
import { SidebarService } from '../../helper/sidebar.service';
declare const require: any;

@Component({
  selector: 'so-sidemenu',
  templateUrl: './so-sidemenu.component.html',
  styleUrls: ['./so-sidemenu.component.css']
})
export class SoSidemenuComponent implements OnInit {
  sideMenuSubscription: Subscription;
  show: boolean;
  submenuList: any;
  isPinned: boolean;
  showSideMenu: boolean;
  currentPage: number;

  constructor(private translate: TranslateService, private ss: SidebarService, private sm: SideMenuService, private route:ActivatedRoute,private router:Router) {

    ss.getStatus.subscribe(event => {
      this.show = event;
      this.showSideMenu = this.show;
      console.log(event);
    });

    sm.getCurrentPage.subscribe(event => {
      this.currentPage = event;
    });

    translate.setTranslation('en', require('../../../assets/i18n/en.json'));
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {

    this.submenuList = [{
      page: 1,
      displayName: 'Venue Details',
      iconName: 'globe',
      route: '/venue_planning/venue_details',
      submenu: false,
      status: 'done',
      disabled: false,
      firstLevel: []
    },
    {
      page: 2,
      displayName: 'Import Input Files',
      iconName: 'globe',
      route: '/venue_planning/import_files',
      submenu: false,
      status: 'done',
      disabled: false,
      firstLevel: []
    },
    {
      page: 3,
      displayName: 'Venue Configuration',
      iconName: 'globe',
      route: '/venue_planning/venue_configuration',
      submenu: true,
      status: 'done',
      disabled: false,
      firstLevel: [
        {
          displayName: 'gNodeB1',
          iconName: 'globe',
          route: '/venue_planning/venue_configuration/gNodeB/1',
          status: 'done',
          children: [
            {
              displayName: 'CUCP Configuration',
              iconName: 'globe',
              route: '/venue_planning/venue_configuration/gNodeB/1/cucp_config',
              status: 'done'
            },
            {
              displayName: 'CUUP Configuration',
              iconName: 'globe',
              route: '/venue_planning/venue_configuration/gNodeB/1/cuup_config',
              status: 'done'
            },
            {
              displayName: 'DU Configuration',
              iconName: 'globe',
              route: '/venue_planning/venue_configuration/gNodeB/1/du_config',
              status: 'done'
            },
            {
              displayName: 'Radio Unit',
              iconName: 'globe',
              route: '/venue_planning/venue_configuration/gNodeB/1/radio_units',
              status: 'done'
            }
          ]
        },
        {
          displayName: 'gNodeB Network Configuration',
          iconName: 'globe',
          route: '/venue_planning/venue_configuration/edge_cloud',
          submenu: false,
          status: 'done',
          disabled: false,
          firstLevel: []
        },
        {
          displayName: 'Edge Cloud',
          iconName: 'globe',
          route: '/venue_planning/venue_configuration/edge_cloud',
          submenu: false,
          status: 'done',
          disabled: false,
          firstLevel: []
        },
        {
          displayName: 'Summary and Export',
          iconName: 'globe',
          route: '/venue_planning/venue_configuration/edge_cloud',
          submenu: false,
          status: 'done',
          disabled: false,
          firstLevel: []
        }
      ]
    }
    ];
  }

  getAllgNodeBConfig() {
    let obj = {
      displayName: 'gNodeB',
      iconName: 'globe',
      route: '/venue_planning/venue_configuration/gNodeB',
      children: [
        {
          displayName: 'gNodeB1',
          iconName: 'globe',
          route: '/venue_planning/venue_configuration/gNodeB',
          subChildren: [
            {
              displayName: 'Service Configuration',
              iconName: 'globe',
              route: '/venue_planning/venue_configuration/gNodeB/service_config',
              status: 'done'
            }
            // {
            //   displayName: 'Radio Configuration',
            //   iconName: 'globe',
            //   route: '/venue_planning/venue_configuration/gNodeB/radio_config',
            //   status: 'done'
            // },
            // {
            //   displayName: 'CUCP Configuration',
            //   iconName: 'globe',
            //   route: '/venue_planning/venue_configuration/gNodeB/cucp_config',
            //   status: 'done'
            // },
            // {
            //   displayName: 'CUUP Configuration',
            //   iconName: 'globe',
            //   route: '/venue_planning/venue_configuration/gNodeB/cuup_config',
            //   status: 'done'
            // },
            // {
            //   displayName: 'DU Configuration',
            //   iconName: 'globe',
            //   route: '/venue_planning/venue_configuration/gNodeB/du_config',
            //   status: 'done'
            // }
          ]
        },

      ]
    }
    return obj;
  }

  hideSubMenu(subMenu) {
    if (subMenu && subMenu.length > 0) {
      this.ss.setStatus = true;
    } else {
      this.ss.setStatus = false;
    }
  }

  showMenu() {
    this.ss.setStatus = true;
    this.showSideMenu = true;
  }
  hideMenu() {
    this.ss.setStatus = false;
    this.showSideMenu = false;
  }

}
