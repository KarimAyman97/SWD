import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms-layout',
  templateUrl: './forms-layout.component.html',
  styleUrls: ['./forms-layout.component.css'],
})
export class FormsLayoutComponent implements OnInit {
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onCloseButtonClick(): void {
    this.closeForm.emit();
  }
}
