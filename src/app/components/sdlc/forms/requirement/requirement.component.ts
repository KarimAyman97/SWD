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
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css'],
})
export class RequirementComponent implements OnInit, OnChanges {
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();
  @Input() data: any;
  selectedFileName;

  requirementForm: FormGroup;
  imageURL: string;

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
    this.requirementForm = this.fb.group({
      id: [null],
      type: ['requirements'],
      introduction: ['', Validators.required],
      purpose: ['', Validators.required],
      audience: ['', Validators.required],
      description: ['', Validators.required],
      requirements: ['', Validators.required],
      useCaseFile: [null, Validators.required],
    });
    if (this.data) this.patchData();
  }

  patchData() {
    this.requirementForm.patchValue({
      id: this.data.id,
      type: this.data.type,
      introduction: this.data.introduction,
      purpose: this.data.purpose,
      audience: this.data.audience,
      description: this.data.description,
      requirements: this.data.requirements,
    });
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.requirementForm.patchValue({
      avatar: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onCloseButtonClick(): void {
    this.closeForm.emit();
  }

  onSubmit(): void {
    const controlId = uuid.v4();

    if (this.requirementForm.valid) {
      if (!this.data) {
        this.requirementForm.get('id').setValue(controlId);
      }
      this.formService.updateFormData(this.requirementForm.value);
      this.onReset();
      this.data = null;
    }
  }
  onReset(): void {
    this.requirementForm.reset();
    this.requirementForm.get('type').setValue('requirements');
    this.data = null;
  }

  removeData() {
    this.formService.removeFormDataById(this.requirementForm.value);
    this.onReset();
  }
}
