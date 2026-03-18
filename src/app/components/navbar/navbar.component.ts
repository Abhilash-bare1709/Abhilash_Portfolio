import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface NavLink { label: string; href: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  activeSection = 'home';
  scrolled = false;

  links: NavLink[] = [
    { label: 'Home',         href: 'home' },
    { label: 'Skills',       href: 'skills' },
    { label: 'Experience',   href: 'experience' },
    { label: 'Projects',     href: 'projects' },
    { label: 'Certificates', href: 'certificates' },
    { label: 'Reviews',      href: 'reviews' },
    { label: 'Contact',      href: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.onScroll();
  }

  navigate(href: string): void {
    this.scrollService.scrollTo(href);
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 30;
    const sectionIds = this.links.map(l => l.href);
    let current = 'home';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        current = id;
      }
    }
    this.activeSection = current;
  }
}
