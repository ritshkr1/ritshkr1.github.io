import { Routes } from '@angular/router';
import { Main } from './main';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/portfolio-main/home/home').then(
            (m) => m.Home
          ),
      },
      {path:'resume',
        loadComponent: () => import('../../pages/portfolio-main/resume/resume').then(m => m.Resume),
      },
      {path: 'projects',
        loadComponent: () => import('../../pages/portfolio-main/projects/projects').then(m => m.Projects)
      },
       {path: 'contact',
        loadComponent: () => import('../../pages/portfolio-main/contact/contact').then(m => m.Contact)
      }
    ],
  },
];
