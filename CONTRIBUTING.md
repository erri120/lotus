# Contributing

There are **a lot** and I mean **a metric fuck ton** of ways you can contribute to this modlist. Pick one of the parts below you want to contribute to:

- [Modlist](#modlist)
  - [Feature Requests](#feature-requests)
  - [Issues](#issues)
  - [CharGen Presets](#chargen-presets)
- [Documentation](#documentation)

## Modlist

Contributing to the Modlist itself is straight forward. You can have a [Feature Requests](#feature-requests), report [Issues](#issues) or maybe you created a sexy character you want to share.

### Feature Requests

Head over to the GitHub [Issues](https://github.com/erri120/lotus/issues?utf8=%E2%9C%93&q=is%3Aissue) page and check if your request was already made by someone else. If you found no similar posts, create a new request by clicking the green `New issues` button in the top right corner. Select `Feature request` and fill out the document.

### Issues

Similar to [Feature Requests](#feature-requests), go to the GitHub [Issues](https://github.com/erri120/lotus/issues?utf8=%E2%9C%93&q=is%3Aissue) page and check if your issue was already reported. If you found no similar posts, create a new issue by clicking the green `New issues` button in the top right corner. Select `Bug report` and fill out the document.

### CharGen Presets

You can share your created Character Preset and I can include it in the Modlist if you want. Head over to [this](https://github.com/erri120/lotus/issues/new/choose) page and click `Add CharGen Preset`.

For your preset to be added to the Modlist there are certain requirements it has to meet:

- No additional character mods got used
- You used the latest version of the Modlist
- You exported **both** the preset **and** the head from the sculpt menu
- The file name match this syntax: `[Race](f/m) - Name`

Example file names:

- `[Nord](f) - Alice`
- `[Darkelf](m) - Bob`

## Documentation

Documentation is very important and is always up for improvements. [README](README.md) and [this file](CONTRIBUTING.md) are both written in Markdown.

Requirements:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

Since this is a git repository, [Git](https://git-scm.com/) and knowledge on how to use it are kinda a hard requirement. You could use the online editor on GitHub but I advise using [VS Code](https://code.visualstudio.com/) and the recommended extensions.

**Forking the Project**:

1) On the GitHub page, click the Fork button (next to the watch and star button).
2) Wait for GH to fork the repo
3) Click on `Clone or download` and copy the URL
4) Open any folder and type: `git clone <url>` with `<url>` being the copied URL (without the `<>`).
5) Open VS Code in that folder

**Working with VS Code and the extensions**:

[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) and [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) will give you everything you need for working with Markdown files. The most important features are the preview and linting.

You can access the preview using the preview button in the top right corner or using `Ctrl+K V`. Linting will encourage standards and consistency for Markdown. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is of course also included so you don't make stupid typos. Do note that the dictionary is not perfect and it does not know _all_ words.

**Making changes**:

If you have no idea how git works, why it exists or what it does than follow these simple steps:

1) Open the VS Code console using `Ctrl+~` or open Git Bash in the current directory.
2) Create a new branch `git checkout -b branch-name`
3) Make any changes to any document within the directory
4) Use `git status` to see all changed files
5) Use `git add file1 file2 file3` to stage all files you changed
6) Use `git commit -m "Some nice message about what you did"` to commit all changes
7) Push the changes to GitHub using `git push`

Do note that `git push` might not work if you have just created the current branch. To fix that use `git push --set-upstream origin branch-name`.

Once pushed, go to the [Pull Request page](https://github.com/erri120/lotus/pulls) and create a new PR by clicking the green `New pull request` button in the top right corner. Select `base: master` and `compare: branch-name`. Click `Create pull request` to create the PR.

**Updating your fork**:

Whenever I push to the `master` branch on the main repository and you want to change something on your fork, you need to update that fork.

Use this command **once**:

`git remote add upstream https://github.com/erri120/lotus.git`

Make sure that you're on your master branch:

`git checkout master`

Fetch all the branches of that remote into remote-tracking branches, such as upstream/master:

`git fetch upstream`

Rewrite your master branch so that any commits of yours that
aren't already in upstream/master are replayed on top of that
other branch:

`git rebase upstream/master`

Push the new changes on your fork to GitHub:

`git push`
