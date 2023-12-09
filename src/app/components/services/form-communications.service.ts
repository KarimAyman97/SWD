// form-communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormCommunicationService {
  private SDLCPhaseSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Project Initiation');
  public phaseTypeData$: Observable<string> =
    this.SDLCPhaseSubject.asObservable();

  private FormsDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  public FormsData$: Observable<any[]> = this.FormsDataSubject.asObservable();

  updatePhaseTypeData(phaseTypeData: string): void {
    this.SDLCPhaseSubject.next(phaseTypeData);
  }

  updateFormData(formData: any): void {
    const currentData = this.FormsDataSubject.getValue();
    if (formData.id) {
      const index = currentData.findIndex((item) => item.id == formData.id);
      if (index != -1) {
        currentData[index] = formData;
      } else {
        currentData.push(formData);
      }
    } else {
      currentData.push(formData);
    }
    this.FormsDataSubject.next(currentData);
  }

  removeFormDataById(data: any): void {
    const currentData = this.FormsDataSubject.getValue();
    const index = currentData.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      currentData.splice(index, 1);
      this.FormsDataSubject.next(currentData);
    }
  }
}
