import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  constructor(private homeSvc: HomeService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }



  onClick() {
    this.homeSvc.userName = Math.random().toString();

  }
}
