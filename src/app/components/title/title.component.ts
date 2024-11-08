import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
   <div>
        <span class="fs-1 fw-semibold">
            {{title}}

        </span>
    </div>
  `,
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() title=''


}
