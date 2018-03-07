# Time for a Git n Javascript Workout!

![image](https://media.giphy.com/media/3oz8xK9ER0CRMAhozK/giphy.gif)

Things are heating up in WDI Narwhal; now we're getting into the heavy stuff! And what better way of prepping for the heavy stuff than be practicing everything we did today! 

In this readme you'll find a link to GitHub's official tutorial and walkthrough on (almost) all of the basic `git` commands, as well as a few questions to test your understanding of various Javascript datatypes. We'll be using all of these datatypes repeatedly, so it's super critical that everyone is on the same page when it comes to recognizing and playing with Javascript stuff. That being said, if you have any questions about anything on the homework, **the TAs are a thing.** 

Submission for this homework will be via Pull Request on this repo. So steps for doing this homework are as follows: 

1. Create a directory inside your `wdi/homeworks` directory (or wherever you're going to save your homeworks going forward) and name it something that makes sense to you
2. On the `wdi-nyc-narwhal` version of this homework, click the Fork button and Fork it to your own Enterprise account
2. Click `Clone or Download` on the Enterprise page and copy the link that pops up
3. From your terminal, while you're inside your new directory for this homework, type `git clone ` and then paste the URL that you got from Enterprise.
4. Do the homework and then `git add`, `git commit`, and then `git push origin master` to put your homework online.
5. Follow the instructions for submitting [here](https://git.generalassemb.ly/wdi-nyc-narwhal/NARWHAL-STUDENTS/wiki/Homework-Submission)
6. Go live your best life and leave everything else to Jase.


## Medium Account
Go to [this link](https://medium.com/) and create an account. You won't need to do anything with it tonight, but it'll be critical going forward. We'll be expecting blog posts from y'all every now and again, and this is where you'll write them. Once you've created it, add your medium username to your pull request for tonight's homework.

## GitHub Practice
Go to [this link](https://try.github.io/levels/1/challenges/1) and make it to the end. I'll trust you on this one.

## JavaScript Practice

For this practice, you'll be playing around with declaring variables and then writing simple JavaScript statements that work with those variables. Since we haven't gone over writing full functions yet, these exercises will end in `console.log`. Do your work in the included `starter.js` file, and write the answers to the conceptual questions as comments.

1. Define variables `a`, `b` and then use the `Math` methods to `console.log` the answer to a Pythagorean Theorem problem using variables `a` and `b` as parameters. We didn't formally go over the javascript `Math` suite in class, but our best friend whose name rhymes with 'Boogle' might be able to help you out here. They might also know what the Pythagorean Theorem is, if you don't. Just saying.


2. Consider the following variable declarations: 

```javascript
let red = 'blue';
let blue = red;
red = 'green';
let orange = blue === red;
let green = Number(red);
```
What are the final values of `red`, `blue`, `orange`, and `green`?

3. Write a JavaScript statement that converts a given number of `pounds` into `kilograms`.
4. Consider the array 

```javascript
let instructors = ['Joe Keohan', 'Avi Lichtschein', 'Jase Andrada', 'Kyle Frable'];
```
Write a statement that adds an instructor, `'John Bell'` to the array.

5. What is the difference between `let` and `const`?
6. Loop over the instructors array and, using a string template, `console.log` the phrase "[instructor] teaches WDI like a boss"


## This homework is due tonight at 11pm