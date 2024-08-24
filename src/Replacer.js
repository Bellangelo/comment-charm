import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class {
    #keywordsFile;

    constructor(language = 'en', languageFile = '') {
        if (languageFile) {
            this.#setKeywordsFile(languageFile);
        } else {
            this.#setKeywordsFile(this.$getLanguageFile(language));
        }
    }

    $getLanguageFile(language) {
        return __dirname + '/keywords/' + language + '.json';
    }

    #setKeywordsFile(path) {
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
