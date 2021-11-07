import { v4 as uuidv4 } from 'uuid';

class UserStorage {

    constructor() {
        this.usersArray = [];
        this.persistUsersStorageIfNotExists();
        this.usersArray = JSON.parse(localStorage.getItem('users'));
    }

    loginUser(user) {
        let existUser = this.getUserByName(user.name);
        if (existUser) {
            this.setCurrentUser(existUser);
        } else {
            this.persistUser(user);
        }
    }

    createUser(name) {
        this.persistUsersStorageIfNotExists();
        let existUser = this.getUserByName(name);
        if (existUser.length !== 0) {
            existUser = JSON.parse(existUser);
            return {
                id: existUser.id,
                name: existUser.name,
                isLogged: true,
                maxPoints: existUser.maxPoints,
                currentPoints: existUser.currentPoints
            }

        } else {
            return {
                id: uuidv4(),
                name: name,
                isLogged: false,
                maxPoints: 0,
                currentPoints: 0,
            }
        }
    }

    persistUsersStorageIfNotExists() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(this.usersArray));
        }
    }

    persistUser(user) {
        let userExist = this.getUserByName(user.name);
        if (userExist.length !== 0) {
            this.setCurrentUser(user);
            userExist = user;
            this._getUsersObject().map((x, y) => {
                if (this.getUserById(userExist.id).id === JSON.parse(x).id) {;
                    this.usersArray.splice(y, 1);
                    this.usersArray.push(JSON.stringify(userExist));
                    localStorage.setItem('users', JSON.stringify(this.usersArray))
                }
            })
        } else {
            this.usersArray.push(JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(this.usersArray));

        }
        return user;

    }

    logout(user) {
        console.log(user);
        this.persistUser(user);
        localStorage.removeItem('currentUser');
    }

    setCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    _getUsersObject() {
        return JSON.parse(localStorage.getItem('users'));
    }

    getUserById(id) {
        let users = this._getUsersObject();
        return JSON.parse(users.filter(user => JSON.parse(user).id === id));
    }

    getUserByName(name) {
        let users = this._getUsersObject();
        return users.filter(user => JSON.parse(user).name === name);
    }

    removeById() {

    }
}

const userStorage = new UserStorage();
export default userStorage;