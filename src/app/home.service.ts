import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public userName: string = "";

  public userName$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public age: number = 1;

  public age$:BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

}
