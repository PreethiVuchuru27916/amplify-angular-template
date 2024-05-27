import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';

Amplify.configure(outputs);

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, AmplifyAuthenticatorModule, BlogComponent, HeaderComponent]
})
export class AppComponent {
  title = 'amplify-angular-template';
  constructor(public authenticatorService: AuthenticatorService, private router: Router) {
    Amplify.configure(outputs)
  }

  navigateToCreate() {
    this.router.navigate(['/create']);
  }
}
