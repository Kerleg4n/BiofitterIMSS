import { Component, OnInit } from '@angular/core';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {
  }

}
