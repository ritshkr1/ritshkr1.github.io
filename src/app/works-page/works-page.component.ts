import { Component } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrl: './works-page.component.css'
})
export class WorksPageComponent {

  projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built using HTML, CSS, and JavaScript to showcase my skills and projects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '../../assets/Portfolio.png',
      link: 'https://github.com/ritshkr1/ritshkr1.github.io',
      liveDemoLink: 'https://ritshkr1.github.io/', // Optional live demo link
    },
    {
      title: 'E-Commerce Web Application',
      description: 'An e-commerce web application developed using React and Firebase for real-time data and authentication.',
      technologies: ['React', 'Firebase', 'CSS'],
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+App',
      link: null,
      liveDemoLink: 'https://username.github.io/e-commerce-app', // Optional live demo link
    },
    {
      title: 'Weather App',
      description: 'A weather app that provides real-time weather updates using OpenWeatherMap API.',
      technologies: ['React', 'Node.js', 'Axios'],
      image: 'https://via.placeholder.com/600x400?text=Weather+App',
      link: 'https://github.com/username/weather-app',
      liveDemoLink: null, // No live demo link
    },
    {
      title: 'Task Manager',
      description: 'A task management app that allows users to create, update, and delete tasks.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=Task+Manager',
      link: 'https://github.com/username/task-manager',
      liveDemoLink: 'https://username.github.io/task-manager', // Optional live demo link
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform where users can create, read, update, and delete blog posts.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400?text=Blog+Platform',
      link: 'https://github.com/username/blog-platform',
      liveDemoLink: null, // No live demo link
    },
  ];
  

}
