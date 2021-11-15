import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentz',
  templateUrl: './componentz.component.html',
  styleUrls: ['./componentz.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentzComponent implements OnInit {

  @Input() userName: string = "";


  constructor() { }

  ngOnInit() {
  }

}
