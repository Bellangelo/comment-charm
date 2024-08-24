import * as github from '@actions/github'
import * as core from '@actions/core'

export default class {
  #oktokit

  constructor(githubToken) {
    this.#oktokit = github.getOktokit(githubToken)
  }

  async updateComment(owner, repo, commentId, commentBody) {
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
