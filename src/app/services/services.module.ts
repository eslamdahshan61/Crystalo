import { ServicesComponent } from "./services.component";
import { CondesignsComponent } from "./condesigns/condesigns.component";
import { ProdesignsComponent } from "./prodesigns/prodesigns.component";
import { MakeOversComponent } from "./make-overs/make-overs.component";
import { ConsultingComponent } from "./consulting/consulting.component";
import { GlassWroughtComponent } from "./glass-wrought/glass-wrought.component";
import { SpacePlanningComponent } from "./space-planning/space-planning.component";

import { RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';

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
