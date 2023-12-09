import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormCommunicationService } from 'src/app/components/services/form-communications.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-initiation-form',
  templateUrl: './initiation-form.component.html',
  styleUrls: ['./initiation-form.component.scss'],
})
export class InitiationFormComponent implements OnInit, OnChanges {
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();
  @Input() data: any;
  intiateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormCommunicationService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.patchData();
    }
  }
  ngOnInit() {
    this.intiateForm = this.fb.group({
      id: [null],
      type: ['initiation'],
      projectTitle: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required],
      objectives: ['', Validators.required],
      projectManager: ['', Validators.required],
      budgetInformation: ['', Validators.required],
      scopeStatement: ['', Validators.required],
    });

    if (this.data) this.patchData();
  }

  patchData() {
    this.intiateForm.patchValue({
      id: this.data.id,
      type: this.data.type,
      projectTitle: this.data.projectTitle,
      startDate: this.data.startDate,
      finishDate: this.data.finishDate,
      objectives: this.data.objectives,
      projectManager: this.data.projectManager,
      budgetInformation: this.data.budgetInformation,
      scopeStatement: this.data.scopeStatement,
    });
  }

  onCloseButtonClick(): void {
    this.closeForm.emit();
  }

  onSubmit(): void {
    const controlId = uuid.v4();
    if (this.intiateForm.valid) {
      if (!this.data) {
        this.intiateForm.get('id').setValue(controlId);
      }
      this.formService.updateFormData(this.intiateForm.value);
      this.onReset();
    }
  }
  onReset(): void {
    this.intiateForm.reset();
    this.intiateForm.get('type').setValue('initiation');
    this.data = null;
  }

  removeData() {
    this.formService.removeFormDataById(this.intiateForm.value);
    this.onReset();
  }
}
