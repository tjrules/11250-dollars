# Practice with state and lifecycle methods!

For this lab you'll be using the amazing [Star Wars API](http://swapi.co/), following this wireframe:

![wireframe](./swapi-wireframe.jpg)

(You only need to display name, height, and birth year.)

### To get started:

- Using `create-react-app`, create a react app
- Install axios using `npm install --save axios` or `yarn add axios`
- (You can use `fetch` if you prefer. `fetch` does not need to be installed.)
- Check out what you get back from SWAPI in Postman, if you want.

### Your SWAPI app should:

- Have at least two components: 
    - `App.js`
    - `CharacterInfo`
- When the page loads, the `CharacterInfo` component should display information about Luke Skywalker (aka `https://swapi.co/api/people/1`).
- When the user clicks on the forward and back buttons, the app displays data about the next or previous character. For ex, clicking on the forward button from Luke shows data about C-3P0 (`https://swapi.co/api/people/2`).

### Some things to think about:

- What lifecycle methods do you think you'll need?
- How will you pass down data from `state`?

### Bonus!

Some of the other properties of the response have URLs to other API endpoints. Add the homeworld's name to the display.

### Finished?

When you're finished, or when we get to the end of the lab, make a pull request on this repo. I just want to see everyone's work.