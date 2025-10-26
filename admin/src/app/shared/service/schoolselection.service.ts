import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolselectionService {

  public selectSchool = new BehaviorSubject<any>('');
  schoollist = this.selectSchool.asObservable();

  public searchSchool = new BehaviorSubject<any>('');
  showsearch = this.searchSchool.asObservable();

  public allowSchool = new BehaviorSubject<any>('');
  allowSelect = this.allowSchool.asObservable();

  public hideSchool = new BehaviorSubject<any>('');
  hideSelect = this.hideSchool.asObservable();

  public contentSideView = new BehaviorSubject<any>('');
  list = this.contentSideView.asObservable();
  constructor() { }

  changeSideViewList(data){
    this.contentSideView.next(data);
  }

  listChange(data){
    this.selectSchool.next(data);
  }

  searchList(data){
    this.searchSchool.next(data);
  }

  allowChangeSchool(data){
    this.allowSchool.next(data);
  }

  hideChangeSchool(data){
    this.hideSchool.next(data);
  }
}
