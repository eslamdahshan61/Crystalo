
import { Fwidth2Component } from "./fwidth2/fwidth2.component";
import { Fwidth1Component } from "./fwidth1/fwidth1.component";
import { Modern2Component } from "./modern2/modern2.component";
import { Modern1Component } from "./modern1/modern1.component";
import { Classic2Component } from "./classic2/classic2.component";
import { Classic1Component } from "./classic1/classic1.component";
import { ProjectsComponent } from "./projects.component";

import { RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "singleproject", component: ProjectsComponent },
      { path: "classic1", component: Classic1Component },
      { path: "classic2", component: Classic2Component },
      { path: "modern1", component: Modern1Component },
      { path: "modern2", component: Modern2Component },
      { path: "fwidth1", component: Fwidth1Component },
      { path: "fwidth2", component: Fwidth2Component },
    ]),
  ],
  declarations: [
    ProjectsComponent,
    Classic1Component,
    Classic2Component,
    Modern1Component,
    Modern2Component,
    Fwidth1Component,
    Fwidth2Component,
    FooterComponent,
  ],
  
})
export class ProjectsModule {}
