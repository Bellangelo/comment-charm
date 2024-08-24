const fs = require('fs');
const Replacer = require('../src/Replacer');

test('Keywords in all languages can be successfully identified', () => {
    const languageFiles = fs.readdirSync(__dirname + '/../src/keywords');
    const languages = languageFiles.map((file) => file.split('.')[0]);

    for (const language of languages) {
        const replacer = new Replacer(language);
        const keywords = JSON.parse(fs.readFileSync(__dirname + '/../src/keywords/' + language + '.json', 'utf8'));

        Object.keys(keywords).forEach((key) => {
            expect(replacer.replace(':' + key + ':')).toMatch(new RegExp(keywords[key].join('|')));
            expect(replacer.replace(key)).toMatch(key);
        });
    }
});

test('Invalid language throws an error', () => {
    expect(() => new Replacer('invalid')).toThrow('Language not supported');
});