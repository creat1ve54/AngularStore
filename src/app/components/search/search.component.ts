import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  text: string

  @Output() findProduct = new EventEmitter<{ text: string }>();


  catalogsSearch(): void {
    this.findProduct.emit({text: this.text})
  }

  constructor() {
  }

  ngOnInit(): void {
  }



  onFocusInput() {
    document.querySelector('.search__animation')?.classList.add('search__animation--invisible')
    document.querySelector('.search__close')?.classList.remove('search__close--invisible')
  }

  onBlurInput() {
    if (this.text === '') {
      document.querySelector('.search__animation')?.classList.remove('search__animation--invisible')
      document.querySelector('.search__close')?.classList.add('search__close--invisible')
    }
  }

  onClear() {
    this.text = ''
    this.findProduct.emit({text: this.text})
    document.querySelector('.search__animation')?.classList.remove('search__animation--invisible')
    document.querySelector('.search__close')?.classList.add('search__close--invisible')
  }

}
