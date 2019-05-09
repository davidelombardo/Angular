import { Component } from "@angular/core";
import { User } from "./classes/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "crud-angular";
  showForm = false;
  userSelected: User;

  update(user: User) {
    alert("emitted user" + JSON.stringify(user));
    this.showForm = true;
    this.userSelected = user;
  }
  newUser() {
    this.showForm = true;
    this.userSelected = new User();
  }
}
