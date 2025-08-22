import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeData {
  constructor(private http : HttpClient){}
  getResumeData(){
    return this.http.get('./resume-data.json');
  }
}
