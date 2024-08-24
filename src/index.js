import core from '@actions/core';
import Replacer from './Replacer.js';

try {
    const commentBody = core.getInput('comment-body');
    const language = core.getInput('language');
    const languageFile = core.getInput('language-file');

    core.setOutput('updated-body', (new Replacer(language, languageFile)).replace(commentBody));
} catch (error) {
    core.setFailed(`Action failed with error ${error}`);
}