import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imageUrl: [
        '',
        [Validators.required, Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)]
      ],
      forSale: [false]
    });
  }

  get name() {
    return this.articleForm.get('name');
  }

  get price() {
    return this.articleForm.get('price');
  }

  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Article data:', this.articleForm.value, "Article submited successfully");
    } else {
      console.error('Form is invalid');
    }
  }
}

