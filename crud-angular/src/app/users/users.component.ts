import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../service/user.service";
import { User } from "../classes/user";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  @Output() updateUser = new EventEmitter<User>();
  userCopy: User;
  // @Output e input grazie a EventEmmitter facciamo comunicare la classe padre e quella figlio
  // (Padre: app.component, Figlio: quelle che creiamo noi)
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userService.getUsersHttp().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteUtente(user: User) {
    this.userService.deleteUser(user);
  }
  updateUtente(user: User) {
    this.userCopy = Object.assign({}, user);
    this.updateUser.emit(this.userCopy);
  }
}
