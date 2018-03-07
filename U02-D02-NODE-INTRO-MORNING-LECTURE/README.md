# Intro to Node.js

### Objectives 🤓
- Explain what Node.js is & why it exists
- Introduce modular pattern of application development
- Define and review usage of NPM
- Practice building modules in Javascript using `module.exports` and `require` to organize code.

### Exercises\Labs

- WE DO:  Executing a JS program - 5min
- EXERCISE: Using process.argv - 15min
- EXERCISE: Update Math Module - 15min
- EXERCISE: Exploration - 10 min 
- LAB - Working with Modules - 30 min 

### Questions to Answer ❓ - (5 min)
- What is Javascript like outside the browser?
- How can you reuse code that you've written?
- How can you take advantage of other people's shared code?

## What is Node.js? - Intro (15 mins)

The makers of Node.js (created by Ryan Dahl in 2009) took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took **Google's V8 JavaScript Engine** and gave it the ability to compile JS programs into machine code.

Keep in mind, Node.js is strictly a tool to run JavaScript **outside of a browser** – usually on a server. while it's possible to build web applications and APIs in straight JS, we'll actually be using a framework on top of Node called **Express**.

You can also use [Electron](https://electron.atom.io/) or [NW.js](https://nwjs.io/) to write Desktop applications in HTML/CSS/JavaScript, and they use Node.js to interact with the operating system. The [Atom](https://atom.io/) editor was written in Electron.

#### ☛ Language vs Host
JavaScript is a *programming language*. It specifies valid keywords (`for`, `function`), syntax (`[]` for arrays, `{}` for objects), and a few other built in things, but not a whole lot. The JavaScript language is formally defined by the [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm) specification, though you do not ever need to read this to be a competent JavaScript programmer.

JavaScript is designed to run inside of a *host*. The host provides most of the functionality that we sometimes think of being "built in" to JavaScript itself. We've already seen one JavaScript host: the browser. It provides things like `window`, `document` and the DOM API that *are not* built in to the language, but are provided by the host.

The next host we're going to look at is `Node.js`. It's the same language, but in a *different* host, so the aspects of JavaScript that are part of the language are the same (e.g. functions and objects) but none of the browser-specific functionality will be there (e.g. no `window`, no `document`), and instead we'll have *node specific* functionality in its place. If you're only ever working in one host, the distinction is not very important, but when moving between two it can be helpful to keep track of the similarities and differences.

#### ☛ Why are people excited about Node? 😃

It's new and hot in the industry but why does it matter?

A lot of developers and companies are excited because it allows you to build fast, scalable APIs and sites in JavaScript. We're _familiar_ with JS and being able to use it on the backend gives us the option to use a single programming language throughout an entire full-stack application.

#### ☛ Asynchronous

Node.js is designed to be _event-driven_ and _asynchronous_. While earlier frameworks can only do one thing at a time, Node purposefully sends nearly everything to the background and keeps going.

Imagine a large busy coffee shop. There is a line of people waiting to order, served one at a time. After anyone orders, they go to the counter and wait with other for their coffee, which could take some time to make, and the next person in line is allowed to put their order in. When anyone gets their coffee, they say thank you, and leave.

This is an *asynchronous* interaction. To understand what that means, lets imagine a *small* coffee shop. There is a line of people waiting to order, served one at a time. After anyone orders, the cashier waits until their coffee is finished until they serve the next guest. What do you think the effect would be?

![The Rise of Node](http://thesmartlocal.com/images/easyblog_images/2351/Nostalgic%20Cafe/rwimage.jpg)

Node.js's approach to processes that *might take an unknown amount of time*, like requesting data from the network or writing a file to disk, is to start things right away and move on, then notify your code when the process if finished. This is accomplished using "callbacks" which are functions that JavaScript runs whenever a processing is finished. The alternative is to pause your entire program until the processing is finished (called *blocking*), which Node.js avoids by design.

It means you'll have to think & write your code a little differently, and *time* becomes something you need to be aware of, but the benefit of speed is one thing a lot of developers are excited about with the introduction of Node.

#### ☛ Why Choose Node/Express?

- JavaScript is everywhere; *one* language to rule them all
- Asynchronous means generally faster performance
- Better _concurrency_ – it can serve data to more users with fewer computer resources
- Designed to make real time applications (e.g. chat servers)
- http://www.information-age.com/rise-nodejs-and-why-it-will-rule-enterprise-software-development-least-decade-123460405/

**Big Companies Using Node**

Read this article on [Netguru](https://www.netguru.co/blog/top-companies-used-nodejs-production) to see the top 10 companies using Node in production.


#### ☛ Installing Node.js - (5 min)

To check if we already have Node installed, type: ``node -v`` in terminal. You will see the Node version if it's installed.

If it's not installed:  

First, install Node Version Manager, run the following command:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`

Then we have to restart our terminal. Run the command `nvm help` to see if it was installed successfully. If it doesn't work, run the command `source ~/.nvm/nvm.sh`. Check again to see if it works.

To install node run the following command in your terminal" `nvm install node`.

After it finishes installing run `node` to test it out.

This will install both Node.js and npm on your machine.


*🎉 There are two ways to run JS in node – try them both (Code along):*

#### ☛ Interactive Node - (5 min)

  If you simply type node in terminal, you will launch Node's REPL (Read-Eval-Print-Loop) interactive utility.

  Let's test it:

```js
node

> 10 + 5
// 15

> const arr = [ 1, 2, 3];
// undefined

> arr.forEach(function(v) {
... console.log(v);
... });
// 1
// 2
// 3

> var http = require('http');
// undefined

> http
// [ a massive 'http' object returned from the 'http' module ]
```

Good for experiments, but not reusable.

Press control-c twice to exit REPL.

#### ☛ Missing from the browser

In a `node` REPL session, try the following:

```js
> document.querySelector("a")
> window
> document
```

What happens? Why?

#### WE DO:  Executing a JS program - 5min

Take a moment to navigate via your terminal into the `student` directory of your repo let's write and execute some code in a file! 

```bash
mkdir first-node-script

cd first-node-script

touch main.js

echo "console.log('hello world!');" >> main.js

node main.js

# hello world!
```

#### ☛ New toys

In a `node` REPL session, try the following:

```js
> process.cwd()
> process.env
> process.argv
```

### More on process.argv and Passing Command Line Input
Node is able to pass command parameters into your script using the `process.argv` command. 
```javascript
const input   = process.argv;
```

Running the following command, which `console.logs(input)` will display something similiar to the following:

```javascript
node app.js test
[ '/usr/local/Cellar/node/0.10.33/bin/node',
  '/Users/username/projects/app.js',
  'test' ]
```

Since it's an array returning the `test` input means using array notation and grabbing the 3rd element:

```javascript
input[2]
```

If more than one input is passed than those values are referenced using subsequent array notation values:

```javascript
input[3] // input[4]..ect
```

## Node Modules - Working With Files

Node provides some additional methods to work directly with files:

- readFile()
- writeFile()
- appendFileSync()

We're going to create our own `console.log` that writes to a file. In the student folder create a file called `logger.js` and try the following:

1. import the [`fs`](https://nodejs.org/api/fs.html) module
2. write a function called `ourLog` that takes a string and writes it to a file called "log.txt" using the [`fs.appendFileSync` function](https://nodejs.org/api/fs.html#fs_fs_appendfilesync_file_data_options)
3. write `ourLog("Hello, World!")` at the bottom of the file
4. run `node logger.js` from the terminal
5. does a `log.txt` file appear? whats inside it?

First lets require the `fs` module

```
var fs = require('fs');
```

Then we can provide our script the ability to store command line input:

```
let args = process.argv.slice(2);
```

Now we create the `ourLog` function.  This will use the `fs.appendFileSync`

```
function ourLog(s) {
  let nLine = s + "\n"
  fs.appendFileSync('log.txt',nLine, (err) => { })
}
```

And lastly let's run ourLog function

```
ourLog(args[0])
```

### EXERCISE: Using process.argv - 15min

In the `student` folder create a script called math.js that does the following:

- Takes in three parameters: 
	- first: either add or subtract
	- second: a number
	- third: another number

The script should have logic built in to parse the process.argv input and console.log() the results of either an addition or subtraction operation based on the numbers provided. 

## Node Modules - Built Ins

Like most other modern languages, Node is **modular**. It organizes its code into units called instead of depending on `<script>` tags. In general, this keeps things more organized and helps you write reusable code.

To practice with modules, lets try loading in some that are built into node. Try this in the node REPL

```js
> var os = require("os")
> os.platform()
> os.cpus()
> os.userInfo()
```

What results do you get? What do you think they mean?

`require` is node's way of allowing you to import another module, in this case the [OS module](https://nodejs.org/api/os.html) that is built into node. Note the syntax: require is a normal JavaScript function that returns a value, in this case a JavaScript object, that you interact with using normal JavaScript patterns (`.` access, calling functions). `require` is very powerful, but it is not deeply special or different from JavaScript code we've already seen.


### EXERCISE: Update Math Module - 15min

Update the previous math.js script to do the following:

1. Write the results of each calculation to a file called "results.txt".  Each entry should be on a new line.
2. Replace the console.log() with the `ourLog()` function demo'd in the previous section.

## Node Modules - Exporting

If we want our code to be useable by other modules, we need to *export* parts of it using the `module.exports` object. What you assign to `module.exports` in one module is what will be returned when `require`d from another module.

Create a `main.js` and write

```js
var logger = require("./logger")
```

Now in `logger.js` try exporting the `ourLog` function in the following two ways. For each way, try and use it from `main.js` and observe the difference, remembering that whatever you assign to `module.exports` in one module is the exact value that will be returned when `require`d from another module;

```js
module.exports = ourLog;
```

```js
module.exports = { log: ourLog; }
```

#### ☛ Things to Node ... ahem Note

A `module` isn't actually a global object, but rather, it is local to each module (i.e. the file it is being defined in). However, we can use the `exports` property on modules (`module.exports`) to specifically declare what from the module we want to be made available to other modules/files through the use of `require()`

> Note: The module's source file is only executed the first time that file is required.

## npm - "Node Package Manager" ( 20 mins)

Node uses a package management system to distribute and manage open-source modules.

We can use the _Node Package Manager_ by running its commands, `npm`.

 ☛ Documentation [HERE](https://docs.npmjs.com/misc/faq#if-npm-is-an-acronym-why-is-it-never-capitalized).

### Basics of npm

Npm is two things:

- an *online repository* of node projects/modules
- a *command line utility* that aids in package installation, version management and dependency management

#### Installing and Using a Package - (5 min)

Move into the `student` folder and install the `leftpad` package

```bash
cd practice
npm install leftpad
```

Now, start a REPL session and load `leftpad`

```js
const leftpad = require("leftpad")

console.log(leftpad("Hello!", 10, " "));
```

#### `node_modules`

What is a module?...Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

Node Modules have the following structure:

```javascript
// export an object literal
module.exports = {}

// export a function
module.exports = () => {}
```

Importing a module uses the `require()` method:

```javascript
let someModule = require('./someModule.js')
```

Where does is `leftpad` code stored? Try this in the terminal

```bash
ls node_modules
```

`npm` installs packages into a folder called `node_modules`. This is where it looks for packages as well. Each project is supposed to get its own `node_modules` with its own packages. In fact, it will search the current directory *and every parent directory* until it finds a `node_modules` folder to load from. For example, if you are in the directory `/Users/nasser/Projects/ga/node-intro/student` and try and install a package, `npm` will look for the the following directories in order:

* `/Users/nasser/Projects/ga/node-intro/node_modules`
* `/Users/nasser/Projects/ga/node_modules`
* `/Users/nasser/Projects/node_modules`
* `/Users/nasser/node_modules`
* `/Users/node_modules`
* `/node_modules`

If it does not find any of those directories, it will create `/Users/nasser/Projects/ga/node-intro/node_modules` and use that. If it does find one of those directories, it will install and load all packages form there.

The side effect of this is: **if you accidentally install packages outside of a project your system, all subdirectories of that folder will use the `node_modules` there**.

#### `package.json`:
To keep track of the packages your project depends you can create a `package.json` file.  At a minimum, it must have name and version properties defined within it:

```js
{
  "name": "node_practice_app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.18.1"
  }
}
```

`npm` will guide you through this by running `npm init`. Try that now.

> Note on semantic Versioning: It follows a pattern of MAJOR.MINOR.PATCH.
Read more about it [HERE](http://semver.org/)

[HERE](https://docs.npmjs.com/cli/help) are more CLI commands for npm.
We can bring external packages to our application by running `npm install [options][package name]`. There are multiple optional *flags* you can add to the installation.

For now, I would like to point out a couple of them:
- `--save` will add the package as a dependency to `package.json` for distribution. This way, when other people clone it, and run `npm install`, the package will be automatically installed in the working directory under node-modules (that also magically appeared when you run `npm install`) :thumbsup:
- `--save-dev` will add the package under devDependencies to your `package.json`. Use this option when you want to download a package for developers, such as grunt, gulp (task runners). Thus, when you are distributing your code to production, these dependencies will **not** be available.
- `no options` will not add the package as a dependency to your `package.json`. NOT RECOMMENDED for usage, since there is no way others to know of dependencies your module has.

### .gitignore (5 min)
Since `package.json` is your way of communicating with the world. There is no need to push the `node_modules` folder to gitHub (Also, it can get pretty large).

This is when `.gitignore` file comes in. The word speaks for itself: all folders and files included in it, will be safe and sound on your local machine and not pushed to gitHub. 😳

Take a look at [GITIGNORE.IO](https://www.gitignore.io/) to see examples of application specific ignore files

### EXERCISE: Exploration (10 min)
`npm` distributes modules, but also whole terminal programs written in JavaScript.

Based on your `industry of interest` take at least 5min to look for at least three packages [HERE](https://github.com/sindresorhus/awesome-nodejs#number) that might help you when writing an industry specific application.   

After the 5 min is up with will have a `turn and learn` session with a fellow student to discuss your finding.


### LAB - Working with Modules - (30 min)
Go to `labs/carz` folder within this directory and you will find all the instructions there :thumbsup:

**DONE?** :tada:

Create a separate file within `labs` directory, read the documentation for  [MomentJS](http://momentjs.com/docs/), and **import** it into your application. Use these lecture notes as a reference. Play around with it.

1. What does it do?
2. What are the benefits?
3. Can you figure out what day of the week July 20 3928 will be?
4. Can you write that answer out to a text file?

## Conclusion (10 mins)

> Note: Review the solution to the independent practice

- What are some of the important distinguishing features of Node?
- Demonstrate how to run JS on your computer, both interactively and in a file
- Demonstrate how `module.exports` & `require` work
