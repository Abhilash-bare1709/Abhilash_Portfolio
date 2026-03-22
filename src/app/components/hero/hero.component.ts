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
  linkedinUrl = 'https://www.linkedin.com/in/abhilash-bare-6961aa194/';
  facebookUrl = 'https://www.facebook.com/abhilashbare.bare';
  instagramUrl = 'https://www.instagram.com/abhilash.bare/';
  twitterUrl   = 'https://x.com/AbhilashBare';
  email       =  'bareabhilash2000@gmail.com';
  phone       = '+919526485911';

  hasPhoto = true;
  photoSrc = 'assets/images/Professional Image.jpg';  

  constructor(private scrollService: ScrollService) {}

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
