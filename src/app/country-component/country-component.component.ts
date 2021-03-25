import { Component, OnInit } from "@angular/core";
import { CountryService } from "../country.service";
@Component({
  selector: "app-country-component",
  templateUrl: "./country-component.component.html",
  styleUrls: ["./country-component.component.css"]
})
export class CountryComponentComponent implements OnInit {
  countryList = [];
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountryData().subscribe(data => {
      console.log(data.data);
      this.countryList = data.data;
    });
  }
}
