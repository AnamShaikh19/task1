import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DevelopmentComponent } from './development/development.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';

@Component({
  selector: 'app-faq',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
