import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { Certificate } from '../../models/portfolio.models';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      icon: 'fab fa-python',
      name: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'Coursera'
    },
    {
      icon: 'fas fa-network-wired',
      name: 'Introduction to IoT',
      issuer: 'Cisco Networking Academy'
    },
    {
      icon: 'fas fa-shield-alt',
      name: 'CCPA Certified',
      issuer: 'Vensure University'
    },
    {
      icon: 'fas fa-chart-line',
      name: 'Data Science Training Program',
      issuer: 'Codtech IT Solution'
    },
    {
      icon: 'fab fa-google',
      name: 'Introduction to Generative AI',
      issuer: 'Google — Learning Path'
    }
  ];
}
