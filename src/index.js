const core = require('@actions/core');
const Replacer = require('./Replacer.js');

try {
    const commentBody = core.getInput('comment-body');
    const language = core.getInput('language');

    core.setOutput('updated-body', (new Replacer(language)).replace(commentBody));
} catch (error) {
    core.setFailed(`Action failed with error ${error}`);
}