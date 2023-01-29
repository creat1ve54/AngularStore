import { CatalogService } from './../../services/catalog.service';
import { Component, HostListener, OnInit } from '@angular/core';
import ICatalog from 'src/app/modules/catalog';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // catalogs: ICatalog[] = []
  // newCatalogs: ICatalog[] = []


  constructor(public catalogService: CatalogService) {
  }

  ngOnInit(): void {
    // this.catalogService.getAll().subscribe()
    this.option1 = this.option3
    this.option2 = this.option4
  }

  option1: string
  option2: string
  option3: string = 'Цена по возрастанию'
  option4: string = 'Цена по убыванию'

  open = false


  // page: number = 1
  // limit: number = 8;



  // lastIndex: number = this.catalogService.pageCatalog * this.catalogService.limitCatalog
  // firstIndex: number = this.lastIndex - this.catalogService.limitCatalog
  // currentPage: ICatalog[] = this.catalogService.catalogs.slice(this.firstIndex, this.lastIndex)
  // pageCount: number



  @HostListener('document:click', ['$event.target']) close(e: any) {
    if (e.classList[0] !== 'catalog__item') {
      this.open = false
      document.querySelector('.catalog__list')?.classList.remove('catalog__list--active')
      document.querySelector('.catalog__vector')?.classList.remove('catalog__vector--active')
    }
  }

  Product() {
    this.catalogService.pageCount = Math.ceil(this.catalogService.catalogs.length / this.catalogService.limitCatalog)
  }





  ProductAdd() {
    this.catalogService.pageCatalog += 1
    this.catalogService.lastIndex = this.catalogService.pageCatalog * this.catalogService.limitCatalog
    this.catalogService.firstIndex = this.catalogService.lastIndex - this.catalogService.limitCatalog
    this.catalogService.currentPage = this.catalogService.catalogs.slice(this.catalogService.firstIndex, this.catalogService.lastIndex)
    for (let i = 0; i < this.catalogService.currentPage.length; i++) {
      this.catalogService.newCatalogs?.push(this.catalogService.currentPage[i])
    }
  }

  Open() {
    this.open = !this.open
    if (this.open) {
      document.querySelector('.catalog__list')?.classList.add('catalog__list--active')
      document.querySelector('.catalog__vector')?.classList.add('catalog__vector--active')
    } else {
      document.querySelector('.catalog__list')?.classList.remove('catalog__list--active')
      document.querySelector('.catalog__vector')?.classList.remove('catalog__vector--active')
    }
  }

  Option(e: any): void {
    this.Open()
    if (e.innerHTML === 'Цена по возрастанию' && this.option1 !== 'Цена по возрастанию') {
      this.catalogService.newCatalogs = []
      this.option1 = this.option3
      this.option2 = this.option4
      this.catalogService.catalogs.sort((a, b) => a.price - b.price)
      for (let i = 0; i < this.catalogService.catalogs.length; i++) {
        if (i < 8) {
          this.catalogService.newCatalogs?.push(this.catalogService.catalogs[i])
        }
      }
    }
    if (e.innerHTML === 'Цена по убыванию' && this.option1 !== 'Цена по убыванию') {
      this.catalogService.newCatalogs = []
      this.option1 = this.option4
      this.option2 = this.option3
      this.catalogService.catalogs.sort((a, b) => a.price - b.price)
      this.catalogService.catalogs.reverse()
      for (let i = 0; i < this.catalogService.catalogs.length; i++) {
        if (i < 8) {
          this.catalogService.newCatalogs?.push(this.catalogService.catalogs[i])
        }
      }
    }
    this.catalogService.pageCatalog = 1
    this.catalogService.lastIndex = this.catalogService.pageCatalog * this.catalogService.limitCatalog
    this.catalogService.firstIndex = this.catalogService.lastIndex - this.catalogService.limitCatalog
    this.catalogService.currentPage = this.catalogService.catalogs.slice(this.catalogService.firstIndex, this.catalogService.lastIndex)
  }
}
