import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: SkillCategory[] = [
    {
      icon: 'fas fa-server',
      title: 'Application & SaaS Support',
      tags: ['Live Production Support', 'Hosted Applications', 'Helpdesk Operations', '24/7 Shift Support', 'US Shift Rotation']
    },
    {
      icon: 'fas fa-fire-extinguisher',
      title: 'Incident Management',
      tags: ['Real-Time Issue Resolution', 'Root Cause Analysis', 'Escalation Handling', 'SLA Adherence']
    },
    {
      icon: 'fas fa-tools',
      title: 'ITSM & Support Tools',
      tags: ['Zendesk', 'ServiceNow', 'Ticket Triaging', 'Escalation Workflows']
    },
    {
      icon: 'fas fa-plug',
      title: 'APIs & Web Technologies',
      tags: ['REST APIs', 'Postman', 'Swagger', 'JSON']
    },
    {
      icon: 'fas fa-code',
      title: 'Frontend & Debugging',
      tags: ['JavaScript', 'TypeScript', 'Angular', 'React', 'RxJS', 'NgRx', 'Redux', 'Browser DevTools']
    },
    {
      icon: 'fas fa-database',
      title: 'Programming & Data',
      tags: ['SQL', 'Python', 'Oracle', 'SQL Server', 'Power BI', 'Advanced Excel', 'Node.js']
    },
    {
      icon: 'fas fa-cloud',
      title: 'DevOps & Cloud',
      tags: ['Docker', 'CI/CD', 'Microsoft 365', 'VPN', 'Firewall Admin', 'Exchange']
    },
    {
      icon: 'fas fa-brain',
      title: 'AI & Data Science',
      tags: ['XGBoost', 'Random Forest', 'ETL Pipelines', 'FastAPI', 'D3.js', 'Figma']
    }
  ];
}
