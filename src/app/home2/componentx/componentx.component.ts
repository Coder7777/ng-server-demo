import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentx',
  templateUrl: './componentx.component.html',
  styleUrls: ['./componentx.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentxComponent implements OnInit {

  @Input() userName: string = "";

  constructor() { }

  ngOnInit() {
  }

}
