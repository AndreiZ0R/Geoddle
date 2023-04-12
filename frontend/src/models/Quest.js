export default class Quest {
    constructor(id, author, title, description, tokensReward, date, city) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.description = description
        this.tokensReward = tokensReward;
        this.date = date;
        this.city = city;
    }

    static fromIterable(iterable) {
        return new Quest(...iterable);
    }
}