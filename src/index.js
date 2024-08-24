import core from '@actions/core';
import Replacer from './Replacer.js';
import GithubHelper from './GithubHelper.js';
import App from './App.js';

try {
  const commentBody = core.getInput('comment-body');
  const language = core.getInput('language');
  const languageFile = core.getInput('language-file');
  const commentId = core.getInput('comment-id');
  const owner = core.getInput('owner');
  const repo = core.getInput('repo');
  const token = core.getInput('token');

  const replacer = new Replacer(language, languageFile);
  const githubHelper = new GithubHelper(token);
  const app = new App(replacer, githubHelper);

  app.updateComment(owner, repo, commentId, commentBody);
} catch (error) {
  core.setFailed(`Action failed with error ${error}`)
}
