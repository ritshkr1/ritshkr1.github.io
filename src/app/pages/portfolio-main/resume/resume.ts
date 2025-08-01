import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
  experiences = [
    // {
    //   title: 'Angular Developer',
    //   company: 'Softwiz Infotech',
    //   location: 'Mohali, India',
    //   duration: 'Apr 2024 - Oct 2024',
    //   description: 'Led the front-end team, integrated Azure Active Directory (AAD) for secure authentication, and managed authentication tokens for secure client-server communication. Upgraded PrimeNG, implemented Firebase for real-time user notifications, and added filters for multi-row reports.',
    //   technologies: ['Angular15','TypeScript','JavaScript', 'Azure AD', 'PrimeNG', 'Firebase','Bootstrap', 'Nebular UI','NGX Admin','RxJs','Git','Github','Ngx-Charts','Notfy','Ngx-toastr','MSAL'],
    //   projects: [
    //     {
    //       name: "MUR Shipping",
    //       description: "A scalable system for managing shipping and maintaining ships to load various resources.",
    //       technologies: ["Angular15", ".Net", "AWS", "Azure Auth -MSAL", "Primeng", "NGX-Admin", "Nebular"],
    //     },

    //   ]
    // },
    {
      title: 'Software Developer',
      company: 'Advanta Inc',
      location: 'Mohali, IN',
      duration: 'Feb 2022 - Feb 2024',
      description: 'Implemented and maintained product-based applications using Angular 12, AG Grid, and TailwindCSS. Collaborated with senior developers and QA teams to deliver high-quality results, optimized code, and integrated frontend-backend functionalities.',
      technologies: ['Angular 12', 'TypeScript','JavaScript', 'AG Grid', 'TailwindCSS', 'Bootstrap','Angular Material','Gitlab','Sourcetree', 'Git','Playwright',],
      projects: [
        {
          name: "School Management Software",
          description: "Advanta Rapid ERP is the only one software that you need to manage all aspects of your school and colleges.",
          technologies: ["Angular15", "Node.js", "AWS", "Github","Rxjs"],
        },

      ]
    },
    {
      title: 'Angular Trainee',
      company: 'Advanta Inc',
      location: 'Mohali, IN',
      duration: 'Jan 2022 - Feb 2022',
      description: 'Gained practical experience in front-end development by assisting with the implementation of Angular-based web applications. Participated in code reviews, troubleshooting, and debugging.',
      technologies: ['Angular','TypeScript','JavaScript','Bootstrap','Angular Material','Git','Github','Npm'],
      projects: null
    }
  ];

  education = [
    {
      title: 'BTECH - CSE',
      type: 'Undergraduate',
      college: 'MRS PTU',
      location: 'Patiala, IN',
      duration: '2017 - 2021',
      description: 'Gained a strong foundation in Networking, Object-Oriented Programming, and Data Structures using Java during my Computer Science degree. Enhanced my practical skills with Python during internships and later transitioned into full-stack web development, focusing on JavaScript and modern frontend technologies.',
      technologies: ['Angular','TypeScript','JavaScript','Bootstrap','Angular Material','Git','Github','Npm'],
      projects: null
    }
  ]

  professionalSkills=[
      'Angular 2+',
      'React',
      'RxJS',
      'NgRx',
      'Tailwind CSS',
      'Angular Material',
      'RESTAPI Integration',
      'Git',
      'GitHub',
      'CI/CD (GitHub Actions)',
      'Chrome DevTools',
    ];
    languages = [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Bootstraps'
    ]

}
