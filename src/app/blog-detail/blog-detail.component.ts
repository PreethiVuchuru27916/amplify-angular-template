import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../../amplify/data/resource';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

const client = generateClient<Schema>();

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  public id: null | string = "";
  blog: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.retrieveBlog()
  }

  async retrieveBlog() {
    if(this.id) {
      const response = await client.models.Blog.get({id: this.id});
      this.blog = response.data;
    }
  }
}
