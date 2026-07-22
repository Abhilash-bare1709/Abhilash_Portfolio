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

    try {
      // Send data to our local Node.js backend
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.form.name,
          company: this.form.company,
          email: this.form.email,
          message: this.form.message
        })
      });

      if (response.ok) {
        // Simulate short delay for UI
        await new Promise(r => setTimeout(r, 800));
        this.submitted = true;
      } else {
        throw new Error('Server returned an error');
      }
    } catch (error) {
      alert('Something went wrong. Please check if your backend server is running.');
      console.error(error);
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
