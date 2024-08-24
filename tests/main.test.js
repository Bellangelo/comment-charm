import * as fs from 'fs';
import Replacer from '../src/Replacer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

test('Custom language file', () => {
    const file = __dirname + '/data/my-custom-keywords.json';

    const replacer = new Replacer('', file);
    expect(replacer.replace(':custom-keyword:')).toMatch('Wow, this is the best answer');
});

test('Invalid custom language file throws an error', () => {
    const file = __dirname + '/data/invalid-file.json';

    expect(() => new Replacer('', file)).toThrow('Language not supported');
});