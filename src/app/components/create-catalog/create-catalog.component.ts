import { CatalogService } from './../../services/catalog.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ICatalog from 'src/app/modules/catalog';

@Component({
  selector: 'app-create-catalog',
  templateUrl: './create-catalog.component.html',
  styleUrls: ['./create-catalog.component.scss']
})
export class CreateCatalogComponent implements OnInit {

  // catalogs: ICatalog[]

  constructor(public catalogService: CatalogService,) {

  }

  ngOnInit(): void {
    // this.catalogService.getAll().subscribe(data => {
    //   this.catalogs = data
    // })
  }


  lastIndex: number = this.catalogService.pageCatalog * this.catalogService.limitCatalog
  firstIndex: number = this.lastIndex - this.catalogService.limitCatalog
  currentPage: ICatalog[] = this.catalogService.catalogs.slice(this.firstIndex, this.lastIndex)
  pageCount: number

  file: string


  form = new FormGroup({
    size: new FormControl<string>('', [
      Validators.required,
    ]),
    name: new FormControl<string>('', [
      Validators.required,
    ]),
    price: new FormControl<string>('', [
      Validators.required,
    ]),
    salePrice: new FormControl<string>(''),
    description: new FormControl<string>('', [
      Validators.required,
    ]),
    url: new FormControl<string>('', [
      Validators.required,
    ])
  })


  get size() {
    return this.form.controls.size as FormControl
  }
  get name() {
    return this.form.controls.name as FormControl
  }
  get price() {
    return this.form.controls.price as FormControl
  }
  get description() {
    return this.form.controls.description as FormControl
  }
  get url() {
    return this.form.controls.url as FormControl
  }

  submit() {
    this.catalogService.create({
      id: this.catalogService.catalogs.length + 1,
      size: this.form.value.size as string,
      name: this.form.value.name as string,
      price: Number(this.form.value.price as string),
      salePrice: Number(this.form.value.salePrice as string),
      description: this.form.value.description as string,
      url: this.file
    }).subscribe()
    document.querySelector('body')?.classList.remove('body__close')
    document.querySelector('.main__add-new-product-bg')?.classList.remove('main__add-new-product-bg--open')
    document.querySelector('.main__add-new-product')?.classList.remove('main__add-new-product--invisible')
    document.querySelector('.main__add-new-product-popup')?.classList.remove('main__add-new-product-popup--open')
    this.form.reset()
  }

  handleUpload(e: any) {
    this.file = e.target.files[0].name
  }
}
