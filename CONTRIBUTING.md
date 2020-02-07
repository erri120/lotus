# Contributing

## Updating the README

Requirements:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

Use the recommended extensions (VS Code will automatically tell you). Can also be found [here](.vscode/extensions.json).

Since everything is in Markdown, you should know how to use that. [Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a good Markdown Cheatsheet and most of the time the extensions will report problems.

## Forking the Project

1) On the GitHub page, click the Fork button (next to the watch and star button).
2) Wait for GH to fork the repo
3) Click on `Clone or download` and copy the URL
4) Open any folder and type: `git clone <url>` with `<url>` being the copied URL (without the `<>`).
5) Open VS Code in that folder
6) Start working

## Making changes

1) Create a new branch `git checkout -b <branch-name>`
2) Make changes
3) Add changes to git `git add file1 file2 file3`
4) Commit changes `git commit -m "Good description of what you did"`
5) Push changes `git push`

If your branch is brand new than you will need to set a new upstream:

`git push --set-upstream origin <branch-name>`

Once pushed, go to https://github.com/erri120/lotus and create a new Pull Request for your branch.

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
