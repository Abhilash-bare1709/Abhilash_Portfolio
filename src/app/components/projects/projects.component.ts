import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      type: 'SaaS / Web Platform',
      title: 'Shopify E-Commerce – Barter Tech',
      subtitle: 'B2B & B2C E-Commerce Application',
      description: 'Developed a responsive B2B/B2C platform with secure payment integration, SEO optimization, and product catalog management. Implemented role-based access for admin, vendors, and customers. Optimized frontend with lazy loading, reducing load time by 30% and improving conversion rates by 12% through A/B testing.',
      stack: ['Angular', 'Shopify', 'REST APIs', 'RBAC']
    },
    {
      type: 'Data Analytics / ML',
      title: 'Customer Churn Prediction',
      subtitle: 'Brazilian E-Commerce Dataset',
      description: 'Built an end-to-end ETL pipeline to clean, transform, and analyze large datasets for churn prediction. Implemented XGBoost and Random Forest models achieving 76% accuracy and 74% F1-score. Engineered features that improved model performance by 8%. Automated weekly KPI reports, reducing manual analysis time by 50%.',
      stack: ['Python', 'SQL', 'Power BI', 'XGBoost', 'Random Forest']
    },
    {
      type: 'Web / Mobile Application',
      title: 'Smart Travel Planner App',
      subtitle: 'Climate-Based Travel Explorer',
      description: 'Built an app suggesting destinations based on climate, travel dates, budget, and preferences. Integrated weather forecasts, local attractions, and accommodation recommendations. Generated day-wise itineraries with travel routes, meal plans, and end-to-end cost estimates covering travel, stay, food, and entry tickets.',
      stack: ['Python', 'React', 'REST APIs', 'Google Maps API']
    }
  ];
}
