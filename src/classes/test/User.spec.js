const { beforeAll, expect, test, jest } = require("@jest/globals");
const { EventEmitter } = require("events");
const { default: User } = require("../User");
const { default: userStorage } = require("../UserStorage");
let user = null;
describe('User Class functional tests', () => {
    beforeAll(() => {});
    test('User can be created with given name', () => {
        user = new User('Francisco');
        expect(user.getName()).toBe('Francisco');
        expect(user.getName()).toBe('Francisco');
        user.setName('Sergio')
        expect(user.getName()).toBe('Sergio');
    });
    test('Persist function in UserStorage should be called', () => {
        const store = jest.spyOn(userStorage, 'persistUser');
        user._storeUser();
        expect(store).toHaveBeenCalled();
    });
    test('User points should increase on action call', () => {
        user.increaseCurrentPoints();
        expect(user.currentPoints).toBe(1);
    });
    test('User points should decrease on action call', () => {
        user.decreaseCurrentPoints();
        expect(user.currentPoints).toBe(0);
    });
    test('User points should not decrease if current points are 0', () => {
        user.currentPoints = 0;
        user.decreaseCurrentPoints();
        expect(user.currentPoints).toBe(0);
    });
    test('EventEmitterMock events should be created on connect (Called 4 times)', () => {
        const eeOn = jest.spyOn(global.window.EE, 'on');
        user.connect();
        expect(eeOn).toHaveBeenCalledTimes(4)
    });
    test('If user loses and currentPoints > maxPoints, maxPoint should be current', () => {
        user.currentPoints = 12;
        user.maxPoints = 10;
        const persist = jest.spyOn(userStorage, 'persistUser').mockImplementation(() => {
            return {};
        });
        user.gameOver();
        expect(user.maxPoints).toBe(12);
        expect(persist).toHaveBeenCalled();
    });
    test('User should logout correctly', () => {
        const logout = jest.spyOn(userStorage, 'logout').mockImplementation(() => {
            return {};
        });
        user.logout();
        expect(user.isLogged).toBeFalsy();
        expect(logout).toHaveBeenCalled();
    });
});