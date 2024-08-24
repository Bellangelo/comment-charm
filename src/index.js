const core = require('@actions/core');
const github = require('@actions/github');
const Replacer = require('./Replacer');

try {
    let commentBody = github.context.payload.comment.body;
    core.setOutput('updated-body', (new Replacer()).replace(commentBody));
} catch (error) {
    core.setFailed(`Action failed with error ${error}`);
}