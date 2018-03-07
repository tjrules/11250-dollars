## Good news!  It's React Time!

![](https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif)


## Part 1 - ES6 is My Best Friend and Should Be Your Best Friend Too

Use the new ES6 syntax to complete the following problems:

##### 1. Explain the result of the following code:

```
{ let a = 'I am declared inside an anonymous block'; }
console.log(a); // ReferenceError: a is not defined
```

##### 2. Use .map to add an accomplishment attribute to each object with values: 'Javascript', 'Python', and 'Pizza Margherita'

```
const gods = [
  {name: 'Douglas Crockford'},
  {name: 'Guido van Rossum'},
  {name: 'Raffaele Esposito'}
];
```

##### 3. Look into the `.filter` method for arrays, and see what it does and how to use it. Use it to make a new array of only the vowels (`hint` - Regex would be useful here! See what you can find out about Regex (i.e. Regular Expressions) and if you can make it work, awesome! If not, find other ways of going about this problem):

```
const letters = ["a", "z", "b", "c", "u"];
```

##### 4. Make a class called Phone. Add a constructor method to the Phone class that takes in two arguments, "brand" and "model" which will be equal to `this.brand` and `this.model`.

##### 5. Add a method to the Phone class called `ring` that console logs "your `brand` `model` is getting a call". Create a new instance of the Phone class and invoke the ring method.



## Part 2 - More map, filter, reduce
Based on the morning exercise related to map,filter and reduce fork the following repl and work through the first 3 steps.  Bonus 1 and 2 are optional..repl: [Map\Filter\Reduce - Starter](https://repl.it/@jkeohan/MapFilterReduce-Starter).  

When your done please add a link to your repl.


## Part 3 - If an actor plays the same part twice, does he... REACT???  🤣
Create a react app that renders Jase's favorite things!

#### Spec:
 * The react app should have 3 components: an `App` component, a `List` component and a `ListItem` component.
 * The array below should be exported as a module to be imported into the app component.
 * Use props to pass the data between components as needed.

#### Flow:
1. Create a file in your src directory called `jase-faves.js`.  Add the following array to that file and export it:
  ```
  justJaseThings = [
    'passive-aggressively staring at people who chew too loudly',
    'intense staring contests',
    'competitive sychronized swimming',
    'eating copious amounts of pistachios',
    'yoyo trick videos',
    'J-Killa and A-Littie',
    'when you are cutting wrapping paper and the scissors just glide through to finish the cut'
  ]
  ```
2. Import that module into your `App` component.
3. The `App` component should render the `List` component.
4. The list component should map through the data and render a `ListItem` functional component for each element of the array.
  
