import { v4 as uuidv4 } from 'uuid';

class UserStorage {
    
    constructor() {
        this.usersArray = [];
        localStorage.setItem('users', JSON.stringify(this.usersArray));
        this.usersArray = JSON.parse(localStorage.getItem('users'));
    }

    createUser(name) {
        let existUser = this.getUserByName(name);
        if(existUser.length !== 0) {
            return {
                id: existUser.id,
                name: existUser.name,
                isLogged: false,
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

    persistUser(user) {
        let userExist = this.getUserByName(user.name);
        if(userExist.length !== 0) {
            this.setCurrentUser(user);
            userExist = user;
            this._getUsersObject().map((x,y) => {
                if(this.getUserById(userExist.id).id === JSON.parse(x).id) {
                    this.usersArray.splice(y,y);
                    this.usersArray.push(JSON.stringify(userExist));
                    localStorage.setItem('users', JSON.stringify(this.usersArray))
                }
            })
        } else {
            debugger;
            this.usersArray.push(JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(this.usersArray));
            
        }
        return user;

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