import React from 'react';
import './App.css';


class BasicInfo extends React.Component {
  render() {
    const { name, age, Phone,birthday  } = this.props.people;
    return (
      <div className="App">
        <p>Name: {name}</p>
        <p>age: {age}</p>
        <p>Number: {Phone}</p>
        <p>Date of Birth: {birthday}</p>
        </div>
    );
  }
}

export default BasicInfo;