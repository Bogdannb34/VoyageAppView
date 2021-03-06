import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/Country';
import { Port } from 'src/app/models/Port';
import { CountryService } from 'src/app/services/country/country.service';
import { PortService } from 'src/app/services/port/port.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  public countries$!: Observable<Country[]>;
  public ports$!: Observable<Port[]>;
  public activeTitle: string = '';
  public activateAddEditComponent: boolean = false;
  public country: any;
  public selectedCountry!: number;
  public portsList: Port[] = [];
  public filterPorts: Port[] = [];
  public toggleDisplay: boolean = false;
  public toggleEmpty: boolean = false;

  constructor(private countryService: CountryService, private portService: PortService) { }

  ngOnInit(): void {
    this.toggleDisplay = false;
    this.countries$ = this.countryService.getCountries();
    this.portService.getPorts().subscribe(
      (res: Port[]) => {
        res.forEach(p => this.portsList.push(p));
      });
  }

  public modalAdd() {
    this.country = {
      countryId: 0,
      countryName: null
    }
    this.activeTitle = "Add Country";
    this.activateAddEditComponent = true;
  }

  public modalClose() {
    this.activateAddEditComponent = false;
    this.countries$ = this.countryService.getCountries();
  }

  public showCountryPorts() {
    this.toggleDisplay = true;
    this.toggleEmpty = false;
    this.filterPorts = this.portsList.filter(p =>
      this.selectedCountry === p.countryId);
    if (this.filterPorts.length == 0) {
      this.toggleEmpty = true;
    }
    return this.filterPorts.sort((p1, p2) =>
      p1.portName.localeCompare(p2.portName));
  }
}
