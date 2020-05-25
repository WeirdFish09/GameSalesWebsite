import { Component } from "@angular/core";
import { AuthService } from "../authorization-module/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}
}