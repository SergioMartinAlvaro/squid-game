import userStorage from './UserStorage';

export default class User {

    constructor(name) {

        let userData = userStorage.createUser(name);
        this.id = userData.id;
        this.name = userData.name;
        this.currentPoints = userData.currentPoints;
        this.maxPoints = userData.maxPoints;
        this.isLogged = userData.isLogged;
        this._storeUser();
    }

    increaseCurrentPoints() {
        this.currentPoints++;
        return this;
    }

    decreaseCurrentPoints() {
        if (this.currentPoints > 0) {
            this.currentPoints--;
        }

        return this;
    }

    disconnect() {
        // Sacar de localStorage
        this._storeUser();
        this.isLogged = false;
    }

    connect() {
        this.isLogged = true;
        this._setCurrentUser();

        window.EE.on('decreaseCount', () => {
            this.decreaseCurrentPoints();
        })

        window.EE.on('sumStep', () => {
            this.increaseCurrentPoints();
        });

        window.EE.on('restartCount', () => {
            this.gameOver();
            window.EE.emit('showFinalMessage');
        });


    }

    gameOver() {
        if (this.currentPoints > this.maxPoints) {
            this.maxPoints = this.currentPoints;
        }
        this.currentPoints = 0;
        this._storeUser();
        return this;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    _setCurrentUser() {
        userStorage.setCurrentUser(this);
    }

    _storeUser() {
        userStorage.persistUser(this);
    }


    _getUserData(name) {
        userStorage.createUser(name);
    }
}