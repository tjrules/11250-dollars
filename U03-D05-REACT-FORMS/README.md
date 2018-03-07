# React forms and review

## Objectives

1. Explain how React controls form inputs
2. Describe how the input value is set to React state
3. Explain how React handles changes in form inputs
4. Take a step back and review React

## [React, forms, and controlled inputs](https://facebook.github.io/react/docs/forms.html)

> Disclaimer: This lecture leverages [this](https://git.generalassemb.ly/wdi-nyc-narwhal/U03-D05-WEBPACK-AND-REACT) repo for work

- From the React docs:

- In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

- We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

- Normally, we would use built in DOM methods, like `document.querySelector()` to retrieve the values of form inputs. React is now going to take over the control of our input.

#### There are a few pieces of this process:

    - The form itself is a separate component that is comprised of input fields and a submit functionality.
    - Every input value of the form is set as a part of the state in the parent component
    - The form receives methods to control every input field.
    - The form input will have an `onChange` event handler which, will set the state of the parent component to the new value of the input
    - Form has an `onSubmit` event handler. This is so we can prevent the form from actually submitting if the user hits enter on the input box and prevent the page from reloading.

<details>
    <summary>
      Here is the code in our app to add control to our input field
    </summary>
    
   
      <input
          type="text"
          value={this.props.inputContentValue}
          name="content"
          placeholder="Add Quote Here"
          onChange={this.props.handleChange}
        />

</details>

## [Uncontrolled form inputs](https://facebook.github.io/react/docs/uncontrolled-components.html)

  - React also enables us to control form inputs ourselves using somethings called `ref`s. Take a peak at the documentation if you're curious. Even though is seems to be easier to understand, code, and manipulate, it is NOT a best practice.
 So we will not spend too much time on it.

<details>
    <summary>
      Here is the code in our app to add uncontrolled input
    </summary>
    

        class NameForm extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
                name: '',
                birthday: ''
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
          }

          handleSubmit(event) {
            event.preventDefault();
            console.log('here is what you\'re submitting', this.state)
          }
          
          handleChange(event) {
            let name = event.target.name;
            let value = event.target.value
            this.setState({
              [name] : value
            })
          }

          render() {
            return (
              <form onSubmit={this.handleSubmit}>
              <label>
              Name:
              <input type="text" name='name' />
              </label>
              <label>
              Birthday:
              <input type="text" name='birthday' />
              </label>
              <input type="submit" value="Submit" />
              </form>
            );
          }
        }
     
</details>

**FROM REACT DOCS: "Avoid using refs for anything that can be done declaratively."**
