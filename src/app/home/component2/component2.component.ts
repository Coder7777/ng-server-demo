import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class Component2Component implements OnInit {

  constructor(public homeSvc: HomeService) { }

  ngOnInit() {
  }

}
