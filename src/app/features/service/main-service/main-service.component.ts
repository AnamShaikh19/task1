import { Component } from '@angular/core';
import { CarbonreductionComponent } from '../../faq/carbonreduction/carbonreduction.component';
import { CarbonreductionplanComponent } from '../carbonreductionplan/carbonreductionplan.component';

@Component({
  selector: 'app-main-service',
  imports: [CarbonreductionplanComponent],
  templateUrl: './main-service.component.html',
  styleUrl: './main-service.component.css'
})
export class MainServiceComponent {

}
