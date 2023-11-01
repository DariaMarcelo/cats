import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { apiRequest} from "../constants/cat-api-request";

@Injectable()

export class CatService {

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<{ id: string, name: string }[]> {
    return this.http.get<{ id: string, name: string }[]>(`${apiRequest.apiUrl}/breeds`);
  }

  searchCats(selectedBreed: string, resultsQuantity: number): Observable<any[]> {
    const params: any = {
      limit: resultsQuantity.toString(),
    };

    if (selectedBreed !== 'all') {
      params.breed_ids = selectedBreed;
    }

    return this.http.get<any[]>(`${apiRequest.apiUrl}/images/search`, { params });
  }
}
