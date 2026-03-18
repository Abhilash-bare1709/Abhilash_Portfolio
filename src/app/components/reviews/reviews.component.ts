import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Review } from '../../models/portfolio.models';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  // 🔁 Replace these with real colleague testimonials
  reviews: Review[] = [
    {
      initials: 'RK',
      text: 'Abhilash is one of the most reliable engineers I have worked with. His ability to diagnose production incidents under pressure and communicate clearly with both technical and non-technical stakeholders is exceptional. A true asset to any support team.',
      name: 'Rajesh K.',
      role: 'Senior Engineering Manager — Gritstone Technologies'
    },
    {
      initials: 'SM',
      text: 'Working alongside Abhilash was a great experience. His frontend skills with Angular and React are solid, and he always goes the extra mile to document his solutions thoroughly. He took full ownership of features from start to finish without ever needing to be pushed.',
      name: 'Sneha M.',
      role: 'Product Engineer — Gritstone Technologies'
    },
    {
      initials: 'FA',
      text: 'Abhilash demonstrated outstanding professionalism during his time at Gallop. His incident response time and his approach to root cause analysis helped us significantly reduce repeat issues. He adapts quickly to new environments and tools.',
      name: 'Farhan A.',
      role: 'IT Operations Lead — Gallop Shipping Co LLC'
    }
  ];
}
