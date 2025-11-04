import { Component } from '@angular/core';

interface CrmTab {
  label: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-crm-shell',
  templateUrl: './crm-shell.component.html',
  styleUrls: ['./crm-shell.component.scss']
})
export class CrmShellComponent {
  tabs: CrmTab[] = [
    { label: 'Guardians', link: 'guardians', icon: 'bi-people-fill' },
    { label: 'Fees', link: 'fees', icon: 'bi-currency-dollar' },
    { label: 'Notifications', link: 'notifications', icon: 'bi-chat-square-text' },
    { label: 'Report Cards', link: 'reports', icon: 'bi-file-earmark-text' }
  ];
}
