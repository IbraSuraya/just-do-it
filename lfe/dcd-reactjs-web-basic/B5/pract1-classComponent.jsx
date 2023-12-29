import React from 'react';
import { createRoot } from 'react-dom/client';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component created!');
  }

  render() {
    // console.log(this);
    // return <p>Hello, class component!</p>;
    return <p>Hello, {this.props.name}!</p>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent name="Ibra Hasan" />
    <MyComponent name="John" />
    <MyComponent name="Doe" />
  </div>
);
