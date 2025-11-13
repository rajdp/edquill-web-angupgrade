import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../../../shared/service/dashboard.service';
import { CommonDataService } from '../../../shared/service/common-data.service';

interface KPITile {
  label: string;
  value: number | string;
  subtitle?: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: number;
  color: string;
}

interface ActionCard {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
  enabled: boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  dateRangeForm: FormGroup;
  loading = false;
  tiles: KPITile[] = [];
  actionCards: ActionCard[] = [];
  revenue: any = {};

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private toastr: ToastrService,
    private commonData: CommonDataService
  ) {
    this.dateRangeForm = this.fb.group({
      from: [this.getDateString(-30)],
      to: [this.getDateString(0)]
    });
  }

  ngOnInit(): void {
    // Defer API call to avoid change detection issues during route loading
    setTimeout(() => {
      this.loadDashboard();
    }, 0);
    this.initializeActionCards();
  }

  private getDateString(daysOffset: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return date.toISOString().split('T')[0];
  }

  loadDashboard(): void {
    if (this.dateRangeForm.invalid) {
      return;
    }

    this.loading = true;
    this.commonData.showLoader(true);

    const params = {
      from: this.dateRangeForm.value.from,
      to: this.dateRangeForm.value.to
    };

    this.dashboardService.getDashboard(params).subscribe({
      next: (data) => {
        this.loading = false;
        this.commonData.showLoader(false);
        this.buildTiles(data);
        this.revenue = data.revenue || {};
      },
      error: (error) => {
        this.loading = false;
        this.commonData.showLoader(false);
        this.toastr.error(error.message || 'Unable to load dashboard data');
        this.tiles = [];
      }
    });
  }

  private buildTiles(data: any): void {
    const tiles = data.tiles || {};
    this.tiles = [
      {
        label: 'Leads',
        value: this.formatNumber(tiles.leads || 0),
        subtitle: 'New registrations',
        icon: 'bi-person-plus-fill',
        color: 'primary',
        trend: 'neutral'
      },
      {
        label: 'Enrollments',
        value: this.formatNumber(tiles.enrollments || 0),
        subtitle: 'Converted to students',
        icon: 'bi-mortarboard-fill',
        color: 'success',
        trend: 'neutral'
      },
      {
        label: 'Conversion Rate',
        value: `${(tiles.conversion_rate || 0).toFixed(1)}%`,
        subtitle: 'Lead → Enroll',
        icon: 'bi-graph-up-arrow',
        color: 'info',
        trend: 'neutral'
      },
      {
        label: 'Median Days to Enroll',
        value: `${tiles.median_days_to_enroll || 0}`,
        subtitle: 'Average processing time',
        icon: 'bi-clock-history',
        color: 'warning',
        trend: 'neutral'
      },
      {
        label: 'On-Time Pay',
        value: `${(tiles.on_time_pay_pct || 0).toFixed(1)}%`,
        subtitle: 'Payment compliance',
        icon: 'bi-check-circle-fill',
        color: 'success',
        trend: 'neutral'
      },
      {
        label: 'DSO',
        value: `${tiles.dso || 0}`,
        subtitle: 'Days Sales Outstanding',
        icon: 'bi-calendar-range',
        color: 'info',
        trend: 'neutral'
      },
      {
        label: 'Teacher Utilization',
        value: `${(tiles.teacher_utilization || 0).toFixed(1)}%`,
        subtitle: 'Schedule efficiency',
        icon: 'bi-person-badge-fill',
        color: 'primary',
        trend: 'neutral'
      },
      {
        label: 'Room Utilization',
        value: `${(tiles.room_utilization || 0).toFixed(1)}%`,
        subtitle: 'Space efficiency',
        icon: 'bi-building',
        color: 'secondary',
        trend: 'neutral'
      },
      {
        label: 'Attendance',
        value: `${(tiles.attendance_pct || 0).toFixed(1)}%`,
        subtitle: 'Session attendance',
        icon: 'bi-check2-square',
        color: 'success',
        trend: 'neutral'
      },
      {
        label: 'No-Show Rate',
        value: `${(tiles.no_show_pct || 0).toFixed(1)}%`,
        subtitle: 'Missed sessions',
        icon: 'bi-x-circle-fill',
        color: 'danger',
        trend: 'neutral'
      },
      {
        label: 'Portal MAU',
        value: this.formatNumber(tiles.portal_mau || 0),
        subtitle: 'Monthly Active Users',
        icon: 'bi-people-fill',
        color: 'info',
        trend: 'neutral'
      },
      {
        label: 'Email Open Rate',
        value: `${(tiles.messaging_open_rate || 0).toFixed(1)}%`,
        subtitle: 'Message engagement',
        icon: 'bi-envelope-open-fill',
        color: 'primary',
        trend: 'neutral'
      },
      {
        label: 'Email Click Rate',
        value: `${(tiles.messaging_click_rate || 0).toFixed(1)}%`,
        subtitle: 'Message engagement',
        icon: 'bi-cursor-fill',
        color: 'info',
        trend: 'neutral'
      },
      {
        label: 'Docs Coverage',
        value: `${(tiles.docs_coverage || 0).toFixed(1)}%`,
        subtitle: 'Document compliance',
        icon: 'bi-file-earmark-check-fill',
        color: 'success',
        trend: 'neutral'
      }
    ];
  }

  private initializeActionCards(): void {
    this.actionCards = [
      {
        id: 'run-autopay',
        label: 'Run Autopay',
        description: 'Process scheduled automatic payments',
        icon: 'bi-credit-card-fill',
        enabled: true,
        action: () => this.runAutopay()
      },
      {
        id: 'nudge-idle',
        label: 'Nudge Idle >72h',
        description: 'Send reminders to inactive registrations',
        icon: 'bi-bell-fill',
        enabled: true,
        action: () => this.nudgeIdle()
      },
      {
        id: 'offer-makeup',
        label: 'Offer Make-up Slots',
        description: 'Send make-up session offers',
        icon: 'bi-calendar-plus-fill',
        enabled: true,
        action: () => this.offerMakeupSlots()
      },
      {
        id: 'request-docs',
        label: 'Request Missing Docs',
        description: 'Send document requests',
        icon: 'bi-file-earmark-text-fill',
        enabled: true,
        action: () => this.requestMissingDocs()
      }
    ];
  }

  private formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }

  runAutopay(): void {
    this.toastr.info('Autopay processing initiated', 'Action');
    // TODO: Implement autopay API call
  }

  nudgeIdle(): void {
    this.toastr.info('Idle registration nudges sent', 'Action');
    // TODO: Implement nudge API call
  }

  offerMakeupSlots(): void {
    this.toastr.info('Make-up slot offers sent', 'Action');
    // TODO: Implement make-up slots API call
  }

  requestMissingDocs(): void {
    this.toastr.info('Document requests sent', 'Action');
    // TODO: Implement document request API call
  }

  onDateRangeChange(): void {
    this.loadDashboard();
  }
}

