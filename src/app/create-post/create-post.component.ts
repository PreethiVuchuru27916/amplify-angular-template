import { Component } from '@angular/core';
import { BlogComponent } from "../blog/blog.component";

@Component({
    selector: 'app-create-post',
    standalone: true,
    templateUrl: './create-post.component.html',
    styleUrl: './create-post.component.css',
    imports: [BlogComponent]
})
export class CreatePostComponent {

}
