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

    formatDate() {
        const [date, rest] = this.date.split("T");

        let [y, m, d] = date.split("-");
        d = parseInt(d);
        if (d < 10) {
            d = "0" + d;
        }
        return `${d}-${m}-${y}`;
    }

    static default() {
        return new Quest(-1, "", "", "", -1, "", "");
    }
}