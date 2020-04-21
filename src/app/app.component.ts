import { slideInAnimation } from "./app.animation";

import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
