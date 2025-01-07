import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {
  experiences = [
    {
      title: 'Angular Developer',
      company: 'Softwiz Infotech',
      location: 'Mohali, India',
      duration: 'Apr 2024 - Oct 2024',
      description: 'Led the front-end team, integrated Azure Active Directory (AAD) for secure authentication, and managed authentication tokens for secure client-server communication. Upgraded PrimeNG, implemented Firebase for real-time user notifications, and added filters for multi-row reports.',
      technologies: ['Angular15','TypeScript','JavaScript', 'Azure AD', 'PrimeNG', 'Firebase','Bootstrap', 'Nebular UI','NGX Admin','RxJs','Git','Github','Ngx-Charts','Notfy','Ngx-toastr','MSAL'],
    },
    {
      title: 'Angular Developer',
      company: 'Advanta Inc',
      location: 'Mohali, India',
      duration: 'Apr 2022 - Feb 2024',
      description: 'Implemented and maintained product-based applications using Angular 12, AG Grid, and TailwindCSS. Collaborated with senior developers and QA teams to deliver high-quality results, optimized code, and integrated frontend-backend functionalities.',
      technologies: ['Angular 12', 'TypeScript','JavaScript', 'AG Grid', 'TailwindCSS', 'Bootstrap','Angular Material','Gitlab','Sourcetree', 'Git','Playwright',],
    },
    {
      title: 'Angular Trainee',
      company: 'Advanta Inc',
      location: 'Mohali, India',
      duration: 'Jan 2022 - Mar 2022',
      description: 'Gained practical experience in front-end development by assisting with the implementation of Angular-based web applications. Participated in code reviews, troubleshooting, and debugging.',
      technologies: ['Angular','TypeScript','JavaScript','Bootstrap','Angular Material','Git','Github','Npm'],
    }
  ];

}
