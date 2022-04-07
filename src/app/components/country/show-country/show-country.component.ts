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
  public selectedCountry!: Country;
  public portsList: Port[] = [];

  constructor(private countryService: CountryService, private portService: PortService) { }

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries();
    this.ports$ = this.portService.getPorts();
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
    this.ports$.forEach(p => this.portsList.push(...p));
    const res = this.portsList.filter(p =>
      p.countryId == this.selectedCountry.countryId
    );
    return res;
  }

}
