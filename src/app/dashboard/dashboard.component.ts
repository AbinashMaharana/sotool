import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../helper/page-title.service';
import { ResetLayoutService } from '../helper/reset-layout-element';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  label: string = "Dashboard";

  constructor(private rls: ResetLayoutService) {
    rls.initDashboard();

  }

  ngOnInit(): void {
  }

}
