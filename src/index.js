const core = require('@actions/core');
const github = require('@actions/github');
const Replacer = require('./Replacer.js');

try {
    const commentBody = core.getInput('comment-body');
    const language = core.getInput('language');

    core.setOutput('updated-body', (new Replacer()).replace(commentBody));
} catch (error) {
    core.setFailed(`Action failed with error ${error}`);
}