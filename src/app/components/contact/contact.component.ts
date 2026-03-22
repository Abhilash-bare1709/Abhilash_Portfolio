import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

interface ContactForm {
  name: string;
  company: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: ContactForm = { name: '', company: '', email: '', message: '' };
  submitted = false;
  submitting = false;
  errors: Partial<ContactForm> = {};

  linkedinUrl = 'https://www.linkedin.com/in/abhilash-bare-6961aa194/';
  facebookUrl = 'https://www.facebook.com/abhilashbare.bare';
  instagramUrl = 'https://www.instagram.com/abhilash.bare/';
  twitterUrl   = 'https://x.com/AbhilashBare';
  email       =  'bareabhilash2000@gmail.com';

  contactItems = [
    { icon: 'fas fa-envelope', label: 'Email',    value: 'bareabhilash2000@gmail.com',       href: 'mailto:bareabhilash2000@gmail.com' },
    { icon: 'fas fa-phone',    label: 'Phone',    value: '+91 9526485911',                   href: 'tel:+919526485911' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/abhilash-bare', href: 'https://www.linkedin.com/in/abhilash-bare' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'B.Sc. CS – Alagappa University (2023)\nDiploma IT – NTTF Bangalore (2021)', href: null }
  ];

  validate(): boolean {
    this.errors = {};
    if (!this.form.name.trim())    this.errors.name    = 'Name is required';
    if (!this.form.email.trim())   this.errors.email   = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(this.form.email)) this.errors.email = 'Enter a valid email';
    if (!this.form.message.trim()) this.errors.message = 'Message is required';
    return Object.keys(this.errors).length === 0;
  }

  async submit(): Promise<void> {
    if (!this.validate()) return;
    this.submitting = true;

    // ─────────────────────────────────────────────────────────────────────────
    // TO RECEIVE REAL EMAILS:
    // 1. Go to https://formspree.io → create a free account → get your form ID
    // 2. Replace 'YOUR_FORMSPREE_ID' with the actual ID (e.g. 'xpwzjkqb')
    // ─────────────────────────────────────────────────────────────────────────
    const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // 🔁 Replace this

    try {
      if (FORMSPREE_ID !== 'YOUR_FORMSPREE_ID') {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.form.name,
            company: this.form.company,
            email: this.form.email,
            message: this.form.message
          })
        });
      }
      // Simulate short delay even in demo mode
      await new Promise(r => setTimeout(r, 800));
      this.submitted = true;
    } catch {
      alert('Something went wrong. Please try emailing directly.');
    } finally {
      this.submitting = false;
    }
  }

  reset(): void {
    this.form = { name: '', company: '', email: '', message: '' };
    this.submitted = false;
    this.errors = {};
  }
}
