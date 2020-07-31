# Tribal Networkd

A [Tribal Studio](https://www.tribaliii.com/) app for filmmakers. Soon to be deployed [here](https://www.tribalnetwork.org/)

Here's how to get started:

## Get a copy of this repo

1.  Fork this respository by [clicking here](https://github.com/ManasaDG/LiveStreamRN/fork).

2.  Clone the forked copy to your computer

3.  Add an upstream to the shared repo:

```
cd LiveStreamRN
git remote add upstream https://github.com/ManasaDG/LiveStreamRN.git

```

## Making your contribution

1. Always start off by fetching and merging the latest changes:

```
git checkout master
git fetch --all
git merge upstream/master
```

2. Install/update dependencies

The "postinstall" script in package.json should automatically install the packages after the merge in the previous step. If that didn't happen for some reason, simply run:

```
yarn install
```

2. Create a feature branch based off master:

```
git checkout -B my_feature_branch_name_here
```

3. Start the dev server

```
yarn start
```

4. ...make your edits, fix a bug, implement a feature, etc. If you're looking for something to work on, check out our [Issues](https://github.com/ManasaDG/LiveStreamRN/issues) page.

5. Add, commit, and push your feature branch to your Github:

```
git add .
git commit -m "Enter your description of your changes."
git push origin my_feature_branch_name_here
```

5.  Use your GitHub page to create a pull request from your feature branch to master.

6.  One of the admins will then merge your changes into the main branch.

7.  Return to step 1 and repeat: fetch, merge, branch, edit, commit, push!
