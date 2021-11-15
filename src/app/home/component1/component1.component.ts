import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Component1Component implements OnInit {


  constructor(public homeSvc: HomeService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.homeSvc.userName);
      this.cdr.markForCheck();
    }, 500);
  }

}
