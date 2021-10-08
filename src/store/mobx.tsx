import { action, makeObservable, observable } from "mobx"
interface UserType {
  id: string,
  Email: string,
  Name: string
}
class UserInfor {
  UserList = [{}]
  constructor() {
    makeObservable(this, {
      UserList: observable,
      addUser: action
    })
  }
  addUser(user: {}) {
    this.UserList = [...this.UserList, { ...user, id: Math.random() }]
  }
  deleteUser(id: string,) {
    // this.UserList = this.UserList.filter(user => user?.id !== id)
  }
}
export const userInfor = new UserInfor()