import {action, makeObservable, observable} from 'mobx';
export interface UserType {
  id: string;
  Email: string;
  Name: string;
}
interface UserList {
  data: [UserType];
}

const initUser: UserType = {
  id: '12345',
  Email: 'hieuhm@gmail.com',
  Name: 'hieuhm',
};

const initUserList: UserList = {data: [initUser]};

class UserInfor {
  UserList: UserList = initUserList;
  constructor() {
    makeObservable(this, {
      UserList: observable,
      addUser: action,
    });
  }

  addUser(user: UserType) {
    this.UserList.data.push(user);
  }
  deleteUser(id: string) {
    // this.UserList = this.UserList.filter(user => user?.id !== id)
  }
}
export const userInfor = new UserInfor();
