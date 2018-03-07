# Git Branching and Merging

## Learning Objectives
* Understand why using branches is important
* Understand why a clean `git` workflow is important
* Build an entire app using branches to separate features
* Merge each branch individually as we work

There's nothing here! 

But by the end there will be a whole bunch of branches with features and stuff! 

## How does branching help us?

Branching in `git` is how we keep track of all of our features. In the "real world," you'll see that it's critical that you (and your team) keep track of the features that are added to any given app. So if everything is in one place and old changes are overwritten, development gets confusing because commit messages can only tell us so much.

## When should we create new branches?

Each branch of your project, just like each file in your app, should concern itself with ONE AND ONLY one feature at any given time. So if you're building out a model for `puns`, then that branch should only have commits for your model.

## So let's get started!

So the idea of branching gives us even more control over the development of our app. In development, you should NEVER touch your `master` branch until you're ready for production. So our first branch will be where we are working out of until we finish everything, and I like to call that a `dev` branch. 

## Codealong
First thing's first. We're going to be working out of our own versions of this repo. Hopefully you've all FORKED this repo first AND THEN cloned it. You should be working out of YOUR OWN version of this. This codealong will only work if you're working separately from this repo.

1. Checkout a new `dev` branch, and then `touch app.js` and `npm init` so that you have the start of a node project. 
2. Install everything that we normally use, `express`, `body-parser`, `ejs`, `morgan`, `method-override`, `pg-promise`
3. Build out the skeleton of your app. We're going to add all of our folders and files, but we aren't going to touch them just yet. Just have them created and waiting to be edited.
4. Configure `app.js` and the npm packages that we installed just now
5. `git add .` 
6. `git commit -m 'initial commit'`
7. `git push origin dev`


## First Lab: 10 minutes

1. Checkout a new branch `database-config`
2. Work only in your `db` folder and all of its subfolders
3. Configure your database in your `db/config.js` using what we have done over and over again.
4. `git add db/config.js`
5. `git commit -m 'configure database'`
6. Write up your `db/migrations/add-puns-table.sql` file that adds a table, `puns` with three columns: 

```sql
id SERIAL PRIMARY KEY NOT NULL, 
pun VARCHAR(255), 
keyword VARCHAR(255)
```
7. `git add db/migrations/add-puns-table.sql`
8. `git commit -m 'add tables to database'`
9. Seed your database using the following values: 

```sql
INSERT INTO puns(pun, keyword) VALUES(
  'Girl, I want to be the Controller that links your Model to my View', 'node'
),
(
  'Girl, if the value is ''my heart,'' then the key is you', 'object'
),
(
  'I just had an allergic REACTion to what you just said', 'react'
),
(
  'Sometimes I say the wrong thing. You may call it a bad EXPRESSion', 'express'
),
(
  'In general, assembly is normally required', 'wdi'
);
```
10. `git add db/seeds/puns.sql`
11. `git commit -m 'add seed file'`
12. Wait for time to run out

## Codealong

Now that we have this new branch, and stuff we've created on this branch, we'll start merging what we just wrote into our `dev` branch using the following step: 

`git push origin database-config`

And then on github, we'll merge our new branch using the GUI.

After that, we'll go back to our terminal and then add the final step:

`git pull origin dev`

which will apply all of the changes we made in the `database-config` branch to our local `dev` branch

## Second Lab: 10 minutes
1. Checkout a new branch `models`
2. Work only in your `models` folder
3. Configure your `models/puns.js` to properly talk to your database
4. `git add models/puns.js`
5. `git commit -m 'add model'`
6. Wait for time to run out

## Codealong

We'll be repeating this process for the rest of our app's features. We've done it for our database, and our model. The rest of the our features, `controllers`, `routes`, and `views` will then receive the same treatment. 

## Merge Conflicts

Inevitably, we're going to have instances where we change stuff without changing branches, or we accidentally edit the same file in two separate branches, and then git will get mad at us. The reason git gets mad is because it's confused. You're giving it mixed signals and it doesn't know what you want to do. If you change same file in two separate branches and then attempt to merge the two branches, git won't know which version you want, at which point you'll have to edit the files yourself and take out the things you don't want. Thankfully, we can do that in github directly on the pull request that we are trying to make.