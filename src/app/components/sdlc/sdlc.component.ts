import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormCommunicationService } from '../services/form-communications.service';

@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.scss'],
})
export class SdlcComponent implements OnInit {
  selectedSDLCPhase: string = '';
  createEnabled: boolean = true;
  designData = null;
  initiateData = null;
  requirementData = null;
  constructor(private formCommunicationService: FormCommunicationService) {}

  ngOnInit() {
    this.formCommunicationService.phaseTypeData$.subscribe((data) => {
      this.selectedSDLCPhase = data;
    });
  }

  enableCreate() {
    this.createEnabled = true;
  }

  onCloseButtonClick(): void {
    this.formCommunicationService.updatePhaseTypeData('');
  }

  onPhaseTypeChange(event: any): void {
    this.formCommunicationService.updatePhaseTypeData(event.target.value);
  }

  onSidebarItemClick(data) {
    if (data.type == 'initiation') {
      this.initiateData = data;
    } else if (data.type == 'requirements') {
      this.requirementData = data;
      console.log(data);
    } else if ((data.type = 'design')) {
      this.designData = data;
    }
  }
}
