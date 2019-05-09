import { Component, OnInit, Input } from "@angular/core";
import { User } from "../classes/user";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  _user: User;
  userCopy: User;
  user2: User;
  @Input() set user(user: User) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }
  // Object.assign fa in modo di copiare il valore della variabile ma ha un altro puntamento in memoria
  // in questo caso ha lo stesso valore del user registrato nel form ma un altro puntamento

  constructor(private userService: UserService) {}

  get user() {
    return this._user;
  }
  ngOnInit() {
    this.user = this.user;
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.saveUser(this.user);
    }
  }
  resetForm() {
    this.user = this.userCopy;
    this.userService.resetForm(this.user);
  }
}
