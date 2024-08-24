const fs = require('fs');

class Replacer {
    #language

    constructor(language = 'en') {
        this.#language = language;
    }

    #getKeywords() {
        return JSON.parse(fs.readFileSync(__dirname + '/keywords/' + this.#language + '.json', 'utf8'));
    }

    replace(commentBody) {
        const keywords = this.#getKeywords();

        Object.keys(keywords).forEach((key) => {
            commentBody = commentBody.replace(new RegExp(':' + key + ':', 'g'), function (match) {
                const items = keywords[key];
                return items[Math.floor(Math.random() * items.length)];
            });
        });

        return commentBody;
    }
}