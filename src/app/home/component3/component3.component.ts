import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class Component3Component implements OnInit {

  constructor(public homeSvc: HomeService) { }

  ngOnInit() {
  }

}
