import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'L2/L3 Application & IT Support Engineer',
      company: 'Gallop Shipping Co LLC',
      period: 'Jun 2024 – Aug 2025',
      location: 'Dubai, UAE',
      stack: 'SaaS Product Support — Production Environment',
      points: [
        'Provided Tier 1, 2, and 3 (L1/L2/L3) application and IT support for hosted SaaS applications and live production systems in a 24/7 rotational and US shift environment.',
        'Handled real-time production incidents, performing deep troubleshooting, root cause analysis (RCA), and escalation to engineering teams for permanent fixes.',
        'Supported application platforms using SQL (Oracle, SQL Server) for data validation, issue investigation, and reporting.',
        'Managed helpdesk operations, ticket triaging, SLA adherence, escalation workflows, and end-user communication.',
        'Administered Microsoft 365, email systems (Microsoft Exchange, Gmail), VPNs, firewalls, and performed new user onboarding and access provisioning.',
        'Tested new applications, patches, and system upgrades; performed regular health checks of devices and applications.',
        'Mentored junior team members, delivered onsite application training sessions, and participated in technical evaluations.'
      ],
      photos: [
        { label: 'Gallop Office', src: '' },
        { label: 'Team Meeting', src: '' },
        { label: 'Work Setup', src: '' }
      ]
    },
    {
      role: 'Product Engineer – Frontend',
      company: 'Gritstone Technologies Pvt Ltd',
      period: 'May 2022 – May 2024',
      location: 'Calicut, India',
      stack: 'Angular · React · SaaS Platforms',
      points: [
        'Developed and supported client-facing SaaS applications using Angular, React, RxJS, NgRx, Redux, and REST APIs.',
        'Integrated and showcased AI-driven microservices on the frontend, enabling real-time consumption of backend AI services.',
        'Designed interactive dashboards, UI components, chatbot modules, and a Document Viewer using Figma, D3.js, and ngx-highcharts.',
        'Acted as product owner for key modules, implementing and rolling out new features across multiple product applications.',
        'Delivered AI-powered applications including medical coding platforms and ETL pipelines integrated with Python and FastAPI.',
        'Deployed and supported applications using Docker and CI/CD pipelines, ensuring smooth production releases.'
      ],
      photos: [
        { label: 'Gritstone Office', src: '' },
        { label: 'Project Demo', src: '' }
      ]
    },
    {
      role: 'MEAN Stack Developer',
      company: 'Deliforce Pvt Ltd',
      period: 'Oct 2021 – Apr 2022',
      location: 'Bangalore, India',
      stack: 'Node.js · Angular · REST APIs',
      points: [
        'Developed and supported RESTful APIs using Node.js and Express.js for a logistics and delivery platform.',
        'Integrated backend services with Angular frontend and managed data using MongoDB.',
        'Worked in Agile sprints, collaborating with cross-functional teams for timely feature delivery and issue resolution.'
      ],
      photos: [
        { label: 'Deliforce HQ', src: '' }
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Gighz Pvt Ltd',
      period: 'Apr 2021 – Sep 2021',
      location: 'Krishnagiri, India',
      stack: 'Zoho One · ERP Automation',
      points: [
        'Customized and supported Zoho One applications including People, Payroll, Recruit, WorkDrive, Cliq, Vault, and LMS.',
        'Automated HR and payroll workflows using Zoho Creator and Deluge scripting.',
        'Managed payroll processing, job postings via Zoho Recruit, and API-based biometric attendance integration.'
      ],
      photos: [
        { label: 'Gighz Office', src: '' }
      ]
    }
  ];
}
