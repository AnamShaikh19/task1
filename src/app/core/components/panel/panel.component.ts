import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-panel',
  imports: [MatExpansionModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  @Input() title? : string;
  @Input() paragraph? : string;

  isOpen = signal(false);

  toggle() {
    console.log(this.isOpen)
    this.isOpen.update(v => !v);
  }
}
