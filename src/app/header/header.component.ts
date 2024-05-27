import { Component, Input } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../../amplify/data/resource';
import { RouterLink } from '@angular/router';

const client = generateClient<Schema>();

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input('signOut') signOut: any;
  // createPost() {
  //   console.log("Getting Created")
  //   try {
  //     client.models.Blog.create({
  //       title: this.blogForm.get('title')?.value,
  //       description: this.blogForm.get('description')?.value
  //     });
  //     // this.listPosts();
  //   } catch (error) {
  //     console.error('error creating blog', error);
  //   }
  // }
}
