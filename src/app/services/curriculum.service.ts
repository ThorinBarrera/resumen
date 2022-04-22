import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  url: string;

  constructor(private http:HttpClient) {
    this.url = 'http://localhost:4200/assets/profile.json'
  }

  getCv(){
    return this.http.get(this.url);
  }
}
