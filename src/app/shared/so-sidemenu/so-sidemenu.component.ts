import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../helper/sidebar.service';

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

  constructor(private sidebarService: SidebarService) {
    this.sideMenuSubscription = sidebarService.getPinStatus.subscribe(event => {
      this.isPinned = event
    });
    this.sideMenuSubscription = sidebarService.getStatus.subscribe(event => {
      this.show = event;
    });

  }

  ngOnInit(): void {

    this.submenuList = [{
      displayName: 'Site Requirements',
      iconName: 'globe',
      route: '/site_requirements',
      submenu: false,
      status: 'done',
      firstLevel: [
        {
          displayName: 'Site Details',
          iconName: 'globe',
          route: '/site_planning/site_requirement/site_details',
          status: 'done'
        },
        {
          displayName: 'Bill of Materials',
          iconName: 'globe',
          route: '/site_planning/site_requirement/bom',
          status: 'done'
        },
        {
          displayName: 'CIQ and Radio Units',
          iconName: 'globe',
          route: '/site_planning/site_requirement/ciq_ru_details',
          status: 'done'
        }
      ]
    },
    {
      displayName: 'Site Configuration',
      iconName: 'globe',
      route: '/site_configuration',
      submenu: true,
      status: 'done',
      firstLevel: [
        {
          displayName: 'VNF Manager',
          iconName: 'globe',
          route: '/site_planning/site_configuration/vnf_manager',
          children: [
            {
              displayName: 'Summary and Export',
              iconName: 'globe',
              route: '/site_planning/site_configuration/vnf_manager/summary_export',
              status: 'done'
            }
          ]
        },
        {
          displayName: 'gNodeB',
          iconName: 'globe',
          route: '/site_planning/site_configuration/gNodeB',
          children: [
            {
              displayName: 'Service Configuration',
              iconName: 'globe',
              route: '/site_planning/site_configuration/gNodeB/service_config',
              status: 'done'
            },
            {
              displayName: 'Radio Configuration',
              iconName: 'globe',
              route: '/site_planning/site_configuration/gNodeB/radio_config',
              status: 'done'
            },
            {
              displayName: 'CUCP Configuration',
              iconName: 'globe',
              route: '/site_planning/site_configuration/gNodeB/cucp_config',
              status: 'done'
            },
            {
              displayName: 'CUUP Configuration',
              iconName: 'globe',
              route: '/site_planning/site_configuration/gNodeB/cuup_config',
              status: 'done'
            },
            {
              displayName: 'DU Configuration',
              iconName: 'globe',
              route: '/site_planning/site_configuration/gNodeB/du_config',
              status: 'done'
            }
          ]
        },
        {
          displayName: 'Edge Cloud',
          iconName: 'globe',
          route: '/site_planning/site_configuration/edge_cloud',
          submenu: false,
          status: 'done',
          children: [
            {
              displayName: 'Summary and Export',
              iconName: 'globe',
              route: '/site_planning/site_configuration/edge_cloud/export',
              status: 'done'
            }
          ]
        }
      ]
    }
    ];
  }

  hideSubMenu(subMenu) {
    if (subMenu && subMenu.length > 0) {
      this.sidebarService.setStatus = true;
    } else {
      this.sidebarService.setStatus = false;
    }
  }
  pinSubmenu() {
    this.isPinned = !this.isPinned;
    this.sidebarService.setPinStattus = this.isPinned;
  }

  ngOnDestroy() {
    this.sideMenuSubscription.unsubscribe();
  }

}