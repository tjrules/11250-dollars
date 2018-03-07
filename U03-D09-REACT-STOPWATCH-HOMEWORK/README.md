# Time Keeps on Ticking Ticking Ticking

![](https://media.giphy.com/media/3orieKqQUhlrE29cA0/giphy.gif)

Let's add an app to our React portfolio! Your old gym coach from high school, the guy who yelled at you and wore sweatpants to fancy occassions, reached out and is now a client. He understands that we live in a digital world, so he wants to modernize with a digital stopwatch!

But he's concerned about your ability to keep track of the tasks needed to build out the stopwatch...


### Assignment

Task: Build a react app which implements a stopwatch. 

**Requirements**:
* **Display**
* **Start button**
* **Stop button**
* **Reset button**

### Step 1 

Let's start out our react app with `create-react-app <stop watch>`  

Back in my day, we compiled our webpacks and we liked it!
![man yells at cloud](https://i.imgur.com/91sn32Q.jpg?fb)  

### Step 2
Decide how exactly you are going to hold state in your parent component
`App`. In general your state should be the minimum amount of information needed for your components (want to know more about proper state-ness? [read this!(optional)](http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/)). You will also need to define a few methods, which you can pass to the buttons as props. You should have at least a `start`, `stop` and `reset` methods which will be fired by the buttons.

HINT: Use
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
to measure time. It is not precise in terms of time keeping but is
good enough for our purposes. Also [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) will help in keeping with our setInterval methods, let's also be sure to use clearInterval when we are done witthem. We don't want to start doubling up

### Bonus

We now have our stopwatch that can `start`, `stop`, and `reset` time, but lets keep track of our laps. Create another component that receives props of laps and renders our a list of times relating to our laps. Make sure the `reset` button clears the laps.

