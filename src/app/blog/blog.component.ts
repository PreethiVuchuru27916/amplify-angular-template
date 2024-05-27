import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';
import { Editor } from 'ngx-editor';
import { NgxEditorModule } from 'ngx-editor';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const client = generateClient<Schema>();

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NgxEditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  editor!: Editor;
  html = '';
  blogForm: UntypedFormGroup;

  constructor(private router: Router) {
    this.blogForm = new FormGroup<any>({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  uploadCoverPicture() {
    console.log("Upload Cover Picture")
  }

  createPost() {
    console.log("Getting Created")
    try {
      client.models.Blog.create({
        title: this.blogForm.get('title')?.value,
        description: this.blogForm.get('description')?.value
      });
      this.router.navigate(['/blog-list'])
    } catch (error) {
      console.error('error creating blog', error);
    }
  }

  deleteTodo(id: string) {
    client.models.Blog.delete({ id });
  }

}


