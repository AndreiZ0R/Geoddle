export default class Quest {
    constructor(author, title, description, tokensReward, date, city) {
        this.author = author;
        this.title = title;
        this.description = description
        this.tokensRewards = tokensReward;
        this.date = date;
        this.city = city;
    }
}