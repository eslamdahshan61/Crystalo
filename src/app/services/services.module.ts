import { TranslateLoader } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ServicesComponent } from "./services.component";
import { CondesignsComponent } from "./condesigns/condesigns.component";
import { ProdesignsComponent } from "./prodesigns/prodesigns.component";
import { MakeOversComponent } from "./make-overs/make-overs.component";
import { ConsultingComponent } from "./consulting/consulting.component";
import { GlassWroughtComponent } from "./glass-wrought/glass-wrought.component";
import { SpacePlanningComponent } from "./space-planning/space-planning.component";

import { RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "serveces", component: ServicesComponent },
      { path: "condesigns", component: CondesignsComponent },
      { path: "prodesigns", component: ProdesignsComponent },
      { path: "makeovers", component: MakeOversComponent },
      { path: "consulting", component: ConsultingComponent },
      { path: "glasswrought", component: GlassWroughtComponent },
      { path: "spaceplanning", component: SpacePlanningComponent },
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
    ServicesComponent,
    CondesignsComponent,
    ProdesignsComponent,
    MakeOversComponent,
    ConsultingComponent,
    GlassWroughtComponent,
    SpacePlanningComponent,
    FooterComponent,
  ],
})
export class ServicesModule {}
