const fs = require('fs');

class Replacer {
    #keywordsFile;

    constructor(language = 'en') {
        this.#setKeywordsFile(language)
    }

    #setKeywordsFile(language) {
        const path = __dirname + '/keywords/' + language + '.json';

        if (!fs.existsSync(path)) {
            throw new Error('Language not supported');
        }

        this.#keywordsFile = path;
    }

    #getKeywords() {
        return JSON.parse(fs.readFileSync(this.#keywordsFile, 'utf8'));
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

module.exports = Replacer;