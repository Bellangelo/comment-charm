import Replacer from './Replacer';
import GithubHelper from './GithubHelper';

export default class {
  /**
   * @var {Replacer} replacer
   */
  #replacer;
  /**
   * @var {GithubHelper} githubHelper
   */
  #githubHelper;

  /**
   *
   * @param {Replacer} replacer
   * @param {GithubHelper} githubHelper
   */
  constructor(replacer, githubHelper) {
    this.#replacer = replacer;
    this.#githubHelper = githubHelper;
  }

  updateComment(owner, repo, commentId, oldCommentBody) {
    const newCommentBody = this.#replacer.replace(oldCommentBody);

    return this.#githubHelper.updateComment(owner, repo, commentId, newCommentBody);
  }
}