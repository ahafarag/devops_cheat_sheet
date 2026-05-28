window.COMMANDS = window.COMMANDS || [];

window.COMMANDS.push({ group: 'Git', category: 'Basic Git Commands', items: [
  { command: 'git init', description: 'Initializes a new Git repository in the current directory. Example: git init' },
  { command: 'git clone', description: 'Copies a remote repository to the local machine. Example: git clone https://github.com/user/repo.git' },
  { command: 'git status', description: 'Displays the state of the working directory and staging area. Example: git status' },
  { command: 'git add', description: 'Adds changes to the staging area. Example: git add file.txt' },
  { command: 'git commit', description: 'Records changes to the repository. Example: git commit -m "Initial commit"' },
  { command: 'git config', description: 'Configures user settings, such as name and email. Example: git config --global user.name "Your Name"' },
  { command: 'git log', description: 'Shows the commit history. Example: git log' },
  { command: 'git show', description: 'Displays detailed information about a specific commit. Example: git show &lt;commit-hash&gt;' },
  { command: 'git diff', description: 'Shows changes between commits, the working directory, and the staging area. Example: git diff' },
  { command: 'git reset', description: 'Unstages changes or resets commits. Example: git reset HEAD file.txt' }
]});

window.COMMANDS.push({ group: 'Git', category: 'Branching and Merging', items: [
  { command: 'git branch', description: 'Lists branches or creates a new branch. Example: git branch feature-branch' },
  { command: 'git checkout', description: 'Switches between branches or restores files. Example: git checkout feature-branch' },
  { command: 'git switch', description: 'Switches between branches (modern alternative to git checkout). Example: git switch feature-branch' },
  { command: 'git merge', description: 'Combines changes from one branch into another. Example: git merge feature-branch' },
  { command: 'git rebase', description: 'Moves or combines commits from one branch onto another. Example: git rebase main' },
  { command: 'git cherry-pick', description: 'Applies specific commits from one branch to another. Example: git cherry-pick &lt;commit-hash&gt;' }
]});

window.COMMANDS.push({ group: 'Git', category: 'Remote Repositories', items: [
  { command: 'git remote', description: 'Manages remote repository connections. Example: git remote add origin https://github.com/user/repo.git' },
  { command: 'git push', description: 'Sends changes to a remote repository. Example: git push origin main' },
  { command: 'git pull', description: 'Fetches and merges changes from a remote repository. Example: git pull origin main' },
  { command: 'git fetch', description: 'Downloads changes from a remote repository without merging. Example: git fetch origin' },
  { command: 'git remote -v', description: 'Lists the URLs of remote repositories. Example: git remote -v' }
]});

window.COMMANDS.push({ group: 'Git', category: 'Stashing and Cleaning', items: [
  { command: 'git stash', description: 'Temporarily saves changes not yet committed. Example: git stash' },
  { command: 'git stash pop', description: 'Applies stashed changes and removes them from the stash list. Example: git stash pop' },
  { command: 'git stash list', description: 'Lists all stashes. Example: git stash list' },
  { command: 'git clean', description: 'Removes untracked files from the working directory. Example: git clean -f' }
]});

window.COMMANDS.push({ group: 'Git', category: 'Tagging', items: [
  { command: 'git tag', description: 'Creates a tag for a specific commit. Example: git tag -a v1.0 -m "Version 1.0"' },
  { command: 'git tag -d', description: 'Deletes a tag. Example: git tag -d v1.0' },
  { command: 'git push --tags', description: 'Pushes tags to a remote repository. Example: git push origin --tags' }
]});

window.COMMANDS.push({ group: 'Git', category: 'Advanced Commands', items: [
  { command: 'git bisect', description: 'Finds the commit that introduced a bug. Example: git bisect start' },
  { command: 'git blame', description: 'Shows which commit and author modified each line of a file. Example: git blame file.txt' },
  { command: 'git reflog', description: 'Shows a log of changes to the tip of branches. Example: git reflog' },
  { command: 'git submodule', description: 'Manages external repositories as submodules. Example: git submodule add https://github.com/user/repo.git' },
  { command: 'git archive', description: 'Creates an archive of the repository files. Example: git archive --format=zip HEAD &gt; archive.zip' },
  { command: 'git gc', description: 'Cleans up unnecessary files and optimizes the repository. Example: git gc' }
]});

window.COMMANDS.push({ group: 'Git', category: 'GitHub-Specific Commands', items: [
  { command: 'gh auth login', description: 'Logs into GitHub via the command line. Example: gh auth login' },
  { command: 'gh repo clone', description: 'Clones a GitHub repository. Example: gh repo clone user/repo' },
  { command: 'gh issue list', description: 'Lists issues in a GitHub repository. Example: gh issue list' },
  { command: 'gh pr create', description: 'Creates a pull request on GitHub. Example: gh pr create --title "New Feature" --body "Description of the feature"' },
  { command: 'gh repo create', description: 'Creates a new GitHub repository. Example: gh repo create my-repo' }
]});
