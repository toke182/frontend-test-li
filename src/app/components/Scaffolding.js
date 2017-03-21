import React, {PropTypes, Component} from 'react';

class Scaffolding extends Component {
  componentDidMount() {
    const {scaffoldingActions} = this.props;
    const text = 'Redux Pattern Works';

    scaffoldingActions.testScaffolding(text);
  }

  render() {
    const {scaffolding} = this.props;
    return (
      <div>
        <h1>SCAFFOLDING WORKS!!</h1>
        <h2>{scaffolding.text}</h2>
      </div>
    );
  }
}

Scaffolding.propTypes = {
  scaffoldingActions: PropTypes.object.isRequired,
  scaffolding: PropTypes.object.isRequired
};

export default Scaffolding;
