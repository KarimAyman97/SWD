import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormCommunicationService } from '../../services/form-communications.service';

@Component({
  selector: 'app-sdlc-sidebar',
  templateUrl: './sdlc-sidebar.component.html',
  styleUrls: ['./sdlc-sidebar.component.css'],
})
export class SdlcSidebarComponent implements OnInit {
  formsData: any[];
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formCommunicationService: FormCommunicationService) {}

  ngOnInit() {
    this.formCommunicationService.FormsData$.subscribe((data) => {
      this.formsData = data;
    });
  }

  onItemClick(item: any): void {
    this.itemClick.emit(item);
  }
}
