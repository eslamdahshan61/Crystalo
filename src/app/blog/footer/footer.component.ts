import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {}
}
