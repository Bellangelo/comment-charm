import * as github from '@actions/github'
import * as core from '@actions/core'

export default class {
  #oktokit

  /**
   * @param {string} githubToken
   */
  constructor(githubToken) {
    this.#oktokit = github.getOctokit(githubToken)
  }

  /**
   *
   * @param {string} repository
   * @param {string} commentId
   * @param {string} commentBody
   */
  async updateComment(repository, commentId, commentBody) {
    const [owner, repo] = repository.split('/');

    await this.#oktokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: commentId,
      body: commentBody
    })

    core.info(`Comment with id ${commentId} updated`)
    core.info(`New body is: ${commentBody}`)

    return commentId
  }
}
