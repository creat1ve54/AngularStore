import { CatalogService } from './../../services/catalog.service';
import { Component, OnInit } from '@angular/core';
import ICatalog from 'src/app/modules/catalog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(public catalogService: CatalogService) {
  }


  ngOnInit(): void {
    this.catalogService.getAll().subscribe()
  }

  // catalogs: ICatalog[] = []
  catalogsNew: ICatalog[] = this.catalogService.catalogs
  catalogsNewSlider: ICatalog[] = []

  newText = ''

  page: number = 1
  limit: number = 4;
  pageCount: number

  lastIndex: number = this.page * this.limit
  firstIndex: number = this.lastIndex - this.limit


  ProductLeft() {
    this.page -= 1
    this.lastIndex = this.page * this.limit
    this.firstIndex = this.lastIndex - this.limit
    this.catalogsNewSlider = this.catalogsNew.slice(this.firstIndex, this.lastIndex)
  }
  ProductRight() {
    this.page += 1
    this.lastIndex = this.page * this.limit
    this.firstIndex = this.lastIndex - this.limit
    this.catalogsNewSlider = this.catalogsNew.slice(this.firstIndex, this.lastIndex)
  }

  changeSearch(eventData: { text: string }) {
    this.newText = eventData.text
    this.catalogsNew = this.catalogService.catalogs.filter(catalog => catalog.name.toLowerCase().includes(eventData.text.toLowerCase()))
    this.pageCount = Math.ceil(this.catalogsNew.length / this.limit)
    this.page = 1
    this.lastIndex = this.page * this.limit
    this.firstIndex = this.lastIndex - this.limit
    this.catalogsNewSlider = this.catalogsNew.slice(this.firstIndex, this.lastIndex)
  }



  onAddProduct() {
    document.querySelector('body')?.classList.add('body__close')
    document.querySelector('.main__add-new-product-bg')?.classList.add('main__add-new-product-bg--open')
    document.querySelector('.main__add-new-product')?.classList.add('main__add-new-product--invisible')
    document.querySelector('.main__add-new-product-popup')?.classList.add('main__add-new-product-popup--open')
  }

  closePopup() {
    document.querySelector('body')?.classList.remove('body__close')
    document.querySelector('.main__add-new-product-bg')?.classList.remove('main__add-new-product-bg--open')
    document.querySelector('.main__add-new-product')?.classList.remove('main__add-new-product--invisible')
    document.querySelector('.main__add-new-product-popup')?.classList.remove('main__add-new-product-popup--open')
  }
}
