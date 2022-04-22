import { Component, OnInit } from '@angular/core';
import {CurriculumService} from "../../services/curriculum.service";

interface About{
  name?:string;
  surname?:string;
  birthDate?:Date;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about:About;

  constructor(private cvService:CurriculumService) {
    this.about = {};
  }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(data=>{
      this.about = data.about;
    })
  }

}
