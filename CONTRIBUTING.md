# Contributing

## Updating the README

Recommended Editor: [Visual Studio Code](https://code.visualstudio.com/)

Use the recommended extensions (VS Code will automatically tell you). Can also be found [here](.vscode/extensions.json).

Since everything is in Markdown, you should know how to use that. [Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a good Markdown Cheatsheet and most of the time the extensions will report problems.

## Updating your fork

`git remote add upstream https://github.com/erri120/lotus.git`

Make sure that you're on your master branch:

`git checkout master`

Fetch all the branches of that remote into remote-tracking branches, such as upstream/master:

`git fetch upstream`

Rewrite your master branch so that any commits of yours that
aren't already in upstream/master are replayed on top of that
other branch:

`git rebase upstream/master`
