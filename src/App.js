import Replacer from './Replacer.js'
import GithubHelper from './GithubHelper.js'

export default class {
  /**
   * @var {Replacer} replacer
   */
  #replacer
  /**
   * @var {GithubHelper} githubHelper
   */
  #githubHelper

  /**
   *
   * @param {Replacer} replacer
   * @param {GithubHelper} githubHelper
   */
  constructor(replacer, githubHelper) {
    this.#replacer = replacer
    this.#githubHelper = githubHelper
  }

  updateComment(repository, commentId, oldCommentBody) {
    const newCommentBody = this.#replacer.replace(oldCommentBody)

    return this.#githubHelper.updateComment(
      repository,
      commentId,
      newCommentBody
    )
  }
}
