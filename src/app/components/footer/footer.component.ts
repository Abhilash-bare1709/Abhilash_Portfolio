import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  linkedinUrl  = 'https://www.linkedin.com/in/abhilash-bare';
  facebookUrl  = 'https://facebook.com/YOUR_PROFILE';
  instagramUrl = 'https://instagram.com/YOUR_HANDLE';
  email        = 'bareabhilash2000@gmail.com';

  navLinks = [
    { label: 'Home',         href: 'home' },
    { label: 'Skills',       href: 'skills' },
    { label: 'Experience',   href: 'experience' },
    { label: 'Projects',     href: 'projects' },
    { label: 'Certificates', href: 'certificates' },
    { label: 'Contact',      href: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollTo(href: string): void {
    this.scrollService.scrollTo(href);
  }
}
