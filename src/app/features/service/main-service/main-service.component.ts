import { Component } from '@angular/core';
import { CarbonreductionComponent } from '../../faq/carbonreduction/carbonreduction.component';
import { CarbonreductionplanComponent } from '../carbonreductionplan/carbonreductionplan.component';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-service',
  imports: [CarbonreductionplanComponent, RouterLink],
  templateUrl: './main-service.component.html',
  styleUrl: './main-service.component.css'
})
export class MainServiceComponent {

}
