import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryWithPlugins } from '../model/CategoryWithPlugins';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedDataSubject = new BehaviorSubject<any>(null);

  setSelectedData(data: CategoryWithPlugins) {
    this.selectedDataSubject.next(data);
  }

  getSelectedData():Observable<CategoryWithPlugins> {
    return this.selectedDataSubject.asObservable();
  }
}
