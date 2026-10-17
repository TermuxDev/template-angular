import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/ci.json';
  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        //const lon = c.geometry.coordinates[0];
        const lon = 258125.371;
        const lat = 760157.801;
        const marker = L.marker([lat, lon]);

        marker.addTo(map);
      }
    });
  }
}
