import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { HttpClient } from "@angular/common/http";

const GET_UTENTI: any = "http://localhost:3000/users";
const GET_UTENTI_PAGE: any = "http://localhost:3000/users";
@Injectable({
  providedIn: "root"
})
export class UserService {
  user2: User;

  users: Array<User> = [
    {
      id: 1,
      nome: "Davide",
      cognome: "Lombardo"
    },
    {
      id: 2,
      nome: "Ciccio",
      cognome: "Ciccia"
    },
    {
      id: 3,
      nome: "Pini",
      cognome: "Pino"
    }
  ];
  constructor(private httpClient: HttpClient) {}

  getUsers(): Array<User> {
    return this.users;
  }

  getUsersHttp() {
    return this.httpClient.get(GET_UTENTI);
  }

  deleteUser(user: User) {
    alert("UserService : delete user");
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: User) {
    this.user2 = Object.assign({}, user);
    this.users[user.id - 1] = this.user2;
    // this.getUsers().splice(this.users.indexOf(user), 1, user);
  }
  saveUser(user: User) {
    user.id = this.users.length + 1;
    this.user2 = Object.assign({}, user);
    this.getUsers().push(this.user2);
  }
  resetForm(user: User) {
    this.getUsers();
  }
}
