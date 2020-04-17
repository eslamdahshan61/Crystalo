import { Component, OnInit } from "@angular/core";
import { $ } from 'protractor';



@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // Scoll To Top


  toggle =document.getElementById("toggle-btn");
  blog = document.getElementById("blog1");

  togglemenu(){
    this.toggle.setAttribute("data-toggle", "collapse");
    this.toggle.setAttribute("data-target", ".navbar-collapse");
  }

}


