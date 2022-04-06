import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  public countries$!: Observable<Country[]>;
  public activeTitle: string = '';
  public activateAddEditComponent: boolean = false;
  public country: any;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries();
  }

  public modalAdd() {
    this.country = {
      countryId: 0,
      countryName: null
    }
    this.activeTitle = "Add Country";
    this.activateAddEditComponent = true;
  }

}
