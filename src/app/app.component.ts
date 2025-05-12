import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { PoliciesComponent } from "./features/policies/policies.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PoliciesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'task1';
}
