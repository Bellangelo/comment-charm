const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        // Get the comment body from the GitHub event payload
        const commentBody = github.context.payload.comment.body;

        // Replace the keywords with the corresponding phrases
        const updatedBody = commentBody.replace(':compliment:', '[ a nice compliment ]')
            .replace(':insult:', '[ a bad insult ]');

        // Set the updated body as output
        core.setOutput('updated_body', updatedBody);
    } catch (error) {
        core.setFailed(`Action failed with error ${error}`);
    }
}

run();