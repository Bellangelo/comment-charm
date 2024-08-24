# Comment Charm - GitHub Action
Transform your PR comments with magical compliments and cheeky insults using GitHub Actions!

## 🚀 Overview
Comment Charm is a GitHub workflow that adds a fun element to your pull requests by automatically generating witty compliments or playful insults for comments. It's a great way to make the code review process more lighthearted and engaging.

## ✨ Features
- Automatically triggers on PR events.
- Generates random compliments or insults for comment feedback.
- Fully customizable behavior.

## 🛠️ Setup & Installation
To add Comment Charm to your project, follow these steps:

- Create the GitHub Actions workflow file:
```yaml
name: Replace Keywords with Compliments and Insults

on:
  issue_comment:
    types: [created, edited]

jobs:
  replace-keywords:
    if: github.actor != 'github-actions[bot]' # Ensure that the action isn't triggered by the bot itself
    runs-on: ubuntu-latest
    steps:
      - name: Replace keywords
        uses: bellangelo/comment-charm@v1
        with:
          comment-body: "${{ github.event.comment.body }}"
          comment-id: ${{ github.event.comment.id }}
```
Commit the workflow file to the .github/workflows/ directory of your repository.

## 🔑 Default keywords
Comment Charm has 2 build-in keywords for English and Greek.

- `:compliment:` - Generates a random compliment.
- `:insult:` - Generates a random insult.

The default language is English ( `en` ).
To change the language to Greek ( `el` ), add the `language` input to the action:
```yaml
- name: Replace keywords
  uses: bellangelo/comment-charm@v1
  with:
    language: 'el'
    comment-body: "${{ github.event.comment.body }}"
    comment-id: ${{ github.event.comment.id }}
```
Comment Charm also contains a Christmas version of these languages.
You can use them by passing either `en-christmas` or `el-christmas` to the `language` input.

## ✏️ Custom keywords
To use your own custom keywords you can just pass your file path to the action:
```yaml
- name: Replace keywords
  uses: bellangelo/comment-charm@v1
  with:
    language-path: 'path/to/your/keywords.json'
    comment-body: "${{ github.event.comment.body }}"
    comment-id: ${{ github.event.comment.id }}
```

## 🎭 Fun alternative
Don't restrict yourself to only `:compliment:` and `:insult:`. 
You can use any keyword you like. For example, you could use a custom `:gif:` to attach a random gif to your comment.