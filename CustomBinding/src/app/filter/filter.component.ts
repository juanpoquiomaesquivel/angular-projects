import { Component, Input } from '@angular/core'; // we need to import 'Input'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input('total') all: number = 0; // it is necessary to obtain data from the parent component
  @Input() free: number = 0;
  @Input() premium: number = 0;
}
