import { Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    {path: 'create', component: CreatePostComponent},
    {path: 'blog-list', component: BlogListComponent},
    {path: 'blog-list/:id', component: BlogDetailComponent},
    {path: '', redirectTo: '/blog-list', pathMatch: 'full'}
];
