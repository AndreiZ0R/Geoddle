export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static default() {
        return new User('', '');
    }
}