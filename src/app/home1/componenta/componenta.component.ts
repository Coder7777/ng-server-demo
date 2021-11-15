import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentaComponent implements OnInit {
  constructor(public homeSvc: HomeService) { }


  ngOnInit() {
  }

}
