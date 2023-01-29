import { Component, Input } from '@angular/core';
import ICatalog from 'src/app/modules/catalog';

@Component({
  selector: 'app-search-catalog-item',
  templateUrl: './search-catalog-item.component.html',
  styleUrls: ['./search-catalog-item.component.scss']
})
export class SearchCatalogItemComponent {
  @Input() catalog: ICatalog

}
