import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsubjectService {

  public schoolChange = new BehaviorSubject<any>('');
  schoollist = this.schoolChange.asObservable();

  public allowChange = new BehaviorSubject<any>('');
  allowedlist = this.allowChange.asObservable();
  constructor() { }

  changeSchoolList(data){
    this.schoolChange.next(data);
  }

  allowSchoolChange(data){
    this.allowChange.next(data);
  }
}
