import React    from 'react';

export default class showHello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentDidMount() {
    fetch('/api/puppies')
      .then(res => res.json())
      .then(puppies => {
        this.setState({ animals: puppies })
      })
      .catch((e) => {
        debugger;
        console.log(e);
      })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello Puppies</h1>
          <div className="columns">
            {
              this.state.animals.map((puppy) => (
                <article className="column" key={puppy.id}>
                  <h3 className="subtitle">{puppy.name}</h3>
                  <p>{puppy.breed}</p>
                  <span className="icon has-text-info">
                      <i className="fa fa-paw fa-3x"></i>
                    </span>
                </article>
              ))
            }
          </div>
        </div>
      </section>

    );
  }
}
