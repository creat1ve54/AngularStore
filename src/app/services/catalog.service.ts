import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import ICatalog from '../modules/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) { }

  catalogs: ICatalog[] = [];
  newCatalogs: ICatalog[] = [];
  pageCatalog: number = 1
  limitCatalog: number = 8

  lastIndex: number = this.pageCatalog * this.limitCatalog
  firstIndex: number = this.lastIndex - this.limitCatalog
  currentPage: ICatalog[]
  pageCount: number



  getAll(): Observable<ICatalog[]> {
    return this.http.get<ICatalog[]>('http://localhost:3000/catalogs').pipe(
      tap(catalogs => this.newProduct(catalogs)),
    );
  }

  create(catalog: ICatalog): Observable<ICatalog> {
    return this.http.post<ICatalog>(
      'http://localhost:3000/catalogs',
      catalog
    ).pipe(
      tap(cat => this.sortArray(cat)),
    );
  }

  sortArray(cat: any) {
    this.catalogs.push(cat)
    this.newCatalogs = []
    this.catalogs.sort((a, b) => a.price - b.price)
    this.pageCatalog = 1
    this.lastIndex = this.pageCatalog * this.limitCatalog
    this.firstIndex = this.lastIndex - this.limitCatalog
    this.currentPage = this.catalogs.slice(this.firstIndex, this.lastIndex)
    for (let i = 0; i < this.currentPage.length; i++) {
      this.newCatalogs?.push(this.currentPage[i])
    }
  }

  newProduct(catalogs: any) {
    this.catalogs = catalogs
    this.catalogs.sort((a, b) => a.price - b.price)
    for (let i = 0; i < this.catalogs.length; i++) {
      if (i < 8) {
        this.newCatalogs?.push(this.catalogs[i])
      }
    }
    this.currentPage = this.catalogs.slice(this.firstIndex, this.lastIndex)
  }
}
