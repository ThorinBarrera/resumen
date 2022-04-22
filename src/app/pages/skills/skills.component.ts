import { Component, OnInit } from '@angular/core';
import {CurriculumService} from "../../services/curriculum.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:any[] = [];

  constructor(private cvService:CurriculumService) { }

  ngOnInit(): void {


    this.cvService.getCv().subscribe(data=>{
      this.skills = data.skills;
    })
  }

}
