const { beforeAll, expect, test, jest, it } = require("@jest/globals");
const { EventEmitter } = require("events");
const { default: User } = require("../User");
const { default: userStorage } = require("../UserStorage");
const { UserStorage } = require("../UserStorage");
let user = null;
describe('User Storage Class functional tests', () => {
    beforeAll(() => {

    })
    it('Should persist users into localStorage if it not exists', () => {
        localStorage.removeItem('users');
        userStorage.persistUsersStorageIfNotExists();
        expect(localStorage.getItem('users')).toBe("[]");
    });
    it('Should return user values if it not exists', () => {
        user = userStorage.createUser('Damian');
        expect(user.name).toBe('Damian');
        expect(user.maxPoints).toBe(0)
        expect(user.isLogged).toBe(false);
        expect(user.currentPoints).toBe(0);
    });
    it('Should return user with persisted values', () => {
        user.maxPoints = 25;
        userStorage.persistUser(user);
        const gettedUser = JSON.parse(userStorage.getUserByName('Damian'));
        expect(gettedUser.maxPoints).toBe(25);
    });
    it('Should persist user if it not exists', () => {
        user = userStorage.createUser('Damian');
        userStorage.persistUser(user);
        expect(userStorage.usersArray).toHaveLength(1);
    });
    it('Should not persist user if it exists', () => {
        userStorage.persistUser(user);
        expect(userStorage.usersArray).toHaveLength(1);
    });
    it('Should get users by name of localstorage', () => {
        let gettedUser = JSON.parse(userStorage.getUserByName('Damian'));
        expect(gettedUser.id).toBe(user.id);
    });
    it('Should get users by id of localstorage', () => {
        let gettedUser = userStorage.getUserById(user.id);
        expect(gettedUser.name).toBe(user.name);
    });
    it('Should set current user if it exist in login action', () => {
        userStorage.loginUser(user);
        expect(localStorage.getItem('currentUser')).toBeTruthy();
    });
    it('Should persist current user if it not exist in login action', () => {
        let newUser = userStorage.createUser('Ramirez');
        userStorage.loginUser(newUser);
        expect(userStorage.usersArray).toHaveLength(2);
    });
    it('Should remove current user on logout', () => {
        userStorage.logout(user);
        expect(localStorage.getItem('currentUser')).toBeNull();
    });
    it('Should not create a new instance of UserStorage', () => {
        let newUserStorage = new UserStorage();
        expect(newUserStorage.usersArray).toHaveLength(2);
    });
});