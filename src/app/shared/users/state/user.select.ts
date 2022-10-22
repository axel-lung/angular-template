import { Selector } from "@ngxs/store";
import { UserStateModel } from "./user.state";

export class UserSelect{
  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }
}
