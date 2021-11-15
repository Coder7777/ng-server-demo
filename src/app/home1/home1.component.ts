import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home1Component implements OnInit {

  constructor(private homeSvc: HomeService) { }

  ngOnInit() {
  }

  onClick() {
    this.homeSvc.userName$.next(Math.random().toString());
  }
}
