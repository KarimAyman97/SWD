import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormCommunicationService } from 'src/app/components/services/form-communications.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class DesignComponent implements OnInit, OnChanges {
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();
  DesignForm!: FormGroup;
  @Input() data: any;

  constructor(
    private fb: FormBuilder,
    private formService: FormCommunicationService
  ) {}

  ngOnInit() {
    this.DesignForm = this.fb.group({
      id: [null],
      type: ['design'],
      fileGroups: this.fb.array([]),
    });
    if (this.data) this.patchData();
  }

  patchData() {
    this.DesignForm.patchValue({ id: this.data.id, type: this.data.type });
    this.data.fileGroups.forEach((element) => {
      const fileGroup = this.fb.group({
        file: [null, Validators.required],
        name: ['', Validators.required],
      });

      fileGroup.patchValue({ name: element.name });
      (this.DesignForm.get('fileGroups') as any).push(fileGroup);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.patchData();
    }
  }

  addFileGroup(): void {
    const fileGroup = this.fb.group({
      file: [null, Validators.required],
      name: ['', Validators.required],
    });

    (this.DesignForm.get('fileGroups') as any).push(fileGroup);
  }

  removeFileGroup(index: number): void {
    (this.DesignForm.get('fileGroups') as any).removeAt(index);
  }

  onSubmit(): void {
    const controlId = uuid.v4();
    if (this.DesignForm.valid) {
      if (!this.data) {
        this.DesignForm.get('id').setValue(controlId);
      }
      this.formService.updateFormData(this.DesignForm.value);
      this.onReset();
    }
  }
  onReset(): void {
    this.DesignForm.reset();
    for (let i = 0; i < this.DesignForm.get('fileGroups').value.length; i++) {
      this.removeFileGroup(i);
    }
    this.DesignForm.get('type').setValue('design');
    this.data = null;
  }

  onCloseButtonClick(): void {
    this.closeForm.emit();
    this.DesignForm.get('type').setValue('design');
  }

  removeData() {
    this.formService.removeFormDataById(this.DesignForm.value);
    this.onReset();
  }
}
