import { ServicesModule } from "./services/services.module";
import { ProjectsModule } from "./projects/projects.module";
import { BlogModule } from "./blog/blog.module";
import { ShopModule } from "./shop/shop.module";
import { AboutModule } from "./about/about.module";

import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, NavBarComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },

      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "404", pathMatch: "full" },
    ]),
    AboutModule,
    ShopModule,
    BlogModule,
    ProjectsModule,
    ServicesModule,
    BrowserModule,
  ],
  exports: [],
  providers: [FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
