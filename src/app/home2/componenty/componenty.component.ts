import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenty',
  templateUrl: './componenty.component.html',
  styleUrls: ['./componenty.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentyComponent implements OnInit {

  @Input() userName: string = "";

  constructor() { }

  ngOnInit() {
  }

}
