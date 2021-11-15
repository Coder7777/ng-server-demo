import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ComponentbComponent implements OnInit {
  constructor(public homeSvc: HomeService) { }


  ngOnInit() {
  }

}
