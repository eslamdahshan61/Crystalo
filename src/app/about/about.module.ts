import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";

import { CommingSoonComponent } from "./comming-soon/comming-soon.component";
import { FqaComponent } from "./fqa/fqa.component";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { NgModule } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "404", component: Error404Component },
      { path: "about", component: AboutComponent },
      { path: "faq", component: FqaComponent },
      { path: "soon", component: CommingSoonComponent },
    ]),

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    Error404Component,
    AboutComponent,
    FqaComponent,
    CommingSoonComponent,

    FooterComponent,
  ],
})
export class AboutModule {}
