import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {

  countriesList$!: Observable<any[]>;

  constructor(private countryService: CountryService) { }

  @Input() country: any;
  countryId: number = 0;
  countryName: string = '';

  ngOnInit(): void {
    this.countryId = this.country.countryId;
    this.countryName = this.country.countryName;
    this.countriesList$ = this.countryService.getCountries();
  }

  public addCountry() {
    const country = {
      countryName: this.countryName
    }

    this.countryService.addCountry(country).subscribe(res => {
      const closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      const showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    });

  }

  public updateCountry() {

  }

}
