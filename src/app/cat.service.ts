import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  getBreeds() {
    return this.http.get<string[]>(`${this.apiUrl}/breeds`);
  }

  searchCats(selectedBreed: string, resultsQuantity: number): Observable<any[]> {
    const params: any = {
      limit: resultsQuantity.toString(),
    };

    if (selectedBreed !== 'all') {
      params.breeds = selectedBreed;
    }

    return this.http.get<any[]>(`${this.apiUrl}/images/search`, { params });
  }
}
