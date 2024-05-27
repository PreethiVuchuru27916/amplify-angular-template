import { Component } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../../amplify/data/resource';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const client = generateClient<Schema>();

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs: any[] = [];
  blogForm: UntypedFormGroup;

  constructor(private router: Router) {
    this.blogForm = new FormGroup<any>({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.listPosts();
  }

  read(blog: any) {
    this.router.navigate(['/blog-list',blog.id])
  }

  listPosts() {
    try {
      client.models.Blog.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.blogs = items;
        },
      });
    } catch (error) {
      console.error('error fetching posts', error);
    }
  }
}
