import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  
  createPost() {
    console.log("Getting Created")
    try {
      client.models.Blog.create({
        title: "Hello",
        description: "Hello I am test"
      });
    } catch (error) {
      console.error('error creating blog', error);
    }
  }
}


