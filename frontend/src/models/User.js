export default class User {
    constructor(id, email, username, online, tokens) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.online = online;
        this.tokens = tokens;
    }

    static fromIterable(iterable) {
        return new User(...iterable);
    }
}