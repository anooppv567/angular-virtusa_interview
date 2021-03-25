import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CountryComponentComponent } from "./country-component/country-component.component";
import { CountryService } from "./country.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, CountryComponentComponent],
  bootstrap: [AppComponent],
  providers: [CountryService]
})
export class AppModule {}
