import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // ─── UPDATE THESE WITH YOUR REAL LINKS ───
  linkedinUrl = 'https://www.linkedin.com/in/abhilash-bare';
  facebookUrl = 'https://facebook.com/YOUR_PROFILE';   // 🔁 Replace
  instagramUrl = 'https://instagram.com/YOUR_HANDLE';  // 🔁 Replace
  email       = 'bareabhilash2000@gmail.com';
  phone       = '+919526485911';

  // ─── SET TO true AND UPDATE src ONCE YOU HAVE A PHOTO ───
  hasPhoto = false;
  photoSrc = 'assets/images/profile.jpg';  // 🔁 Replace with your photo

  constructor(private scrollService: ScrollService) {}

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
