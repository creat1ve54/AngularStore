import { Component, Input } from '@angular/core';
import ICatalog from 'src/app/modules/catalog';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() catalog: ICatalog
}
