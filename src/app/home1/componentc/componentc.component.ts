import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-componentc',
  templateUrl: './componentc.component.html',
  styleUrls: ['./componentc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ComponentcComponent implements OnInit {

  constructor(public homeSvc: HomeService) { }

  ngOnInit() {
  }

}
