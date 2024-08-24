const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

async function run() {
    try {
        const language = 'en';
        const keywords = JSON.parse(fs.readFileSync('./keywords/' + language + '.json', 'utf8'));

        let commentBody = github.context.payload.comment.body;

        Object.keys(keywords).forEach((key) => {
            commentBody = commentBody.replace(new RegExp(key, 'g'), function (match) {
                const items = keywords[key];
                return items[Math.floor(Math.random()*items.length)];
            });
        });

        // Set the updated body as output
        core.setOutput('updated-body', commentBody);
    } catch (error) {
        core.setFailed(`Action failed with error ${error}`);
    }
}

run();