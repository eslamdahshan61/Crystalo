import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { BGVComponent } from "./bgv/bgv.component";
import { BWSComponent } from "./bws/bws.component";
import { BlogComponent } from "./blog.component";
import { RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "BGV", component: BGVComponent },
      { path: "BWS", component: BWSComponent },
      { path: "singleblog", component: BlogComponent },
    ]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [BlogComponent, BWSComponent, BGVComponent, FooterComponent],
})
export class BlogModule {}
