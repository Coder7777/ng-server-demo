import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit {

  public userName: string = "";

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.userName = Math.random().toString();
    
  }
}
