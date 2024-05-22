import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { BlogComponent } from "./blog/blog.component";

Amplify.configure(outputs);

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AmplifyAuthenticatorModule, BlogComponent]
})
export class AppComponent {
  title = 'amplify-angular-template';
  constructor(public authenticatorService: AuthenticatorService) {
    Amplify.configure(outputs)
  }
}
