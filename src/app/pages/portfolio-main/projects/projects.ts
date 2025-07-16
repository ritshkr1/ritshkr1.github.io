import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [
    {
      title: 'Weather App',
      description: 'A weather app that provides real-time weather updates using OpenWeatherMap API.',
      technologies: ['Angular', 'Restful Api', 'NgRx', 'Rxjs'],
      image: 'images/Weather.png',
      link: 'https://github.com/ritshkr1/weatherApp',
      liveDemoLink: 'https://weather-app-7887e.web.app/', // No live demo link
    },
    {
      title: 'Task Manager',
      description: 'A task management app that allows users to create, update, and delete tasks.',
      technologies: ['Angular', 'Restful Api', 'Angular Material'],
      image: 'images/TaskManager.png',
      link: 'https://github.com/ritshkr1/task_management_application',
      liveDemoLink: 'https://crud-operations-1f4bc.web.app/', // Optional live demo link
    },
  ];

}
