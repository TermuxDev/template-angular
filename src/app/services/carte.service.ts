import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  constructor(private http: HttpClient) { }

  getCiShapes() {
    return this.http.get('/assets/data/ci.json');
  }
}
