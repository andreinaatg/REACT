/*
*Note:  Solutions should use class components. 
VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number,
 date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
 */

// class App extends React.Component {  
//   render() { 
//     return (
//       <div>
//         Nina Torrealba, 98046598575, 22/08/2003
//       </div>
//     );
//   }
// }
 
// export default App;

/*
EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set 
‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’
 property and set it to an empty object
*/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   this.state = { 
//     person: {}
//    }
//   }
//   render() { 
//     return ( 
//       <div>
//        Nina Torrealba, 98046598575, 22/08/2003
//      </div>
//     );
//   }
// }
 
// export default App;

/*
MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.
  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. 
  (This challenge should not change the look of the page)
*/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   this.state = { 
//     person: {
//       name: 'Nina Torrealba',
//       age: 20,
//       Phone:'980-465-9875',
//       birthday: '22/08/2003'
//     }
//    }
//   }
//   render() { 
//     return ( 
//       <div>
//         <h1>BasicInfo</h1>
//         <BasicInfo person = {this.state.person}/>
//      </div>
//     );
//   }
// }
 
// export default App;

/*
HARD: Now that you have a basic react app to display one person’s worth of information, 
now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in 
the top-level of state.
(Optional: add styling to space out each person’s info)
*/

// import { Component } from 'react';
import React, {Component} from 'react';
// import './App.css';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      people: [
        {name: 'Nina Torrealba', age: 20, Phone:'456-215-9755', birthday: '22/08/2003'},
        {name: 'Richard Rios', age: 24, Phone:'800-416-6942', birthday: '22/08/2000'},
        {name: 'Salomon Rondon', age: 35, Phone:'786-486-1432', birthday: '22/08/1988'},
        {name: 'Neymar Torrealba', age: 32, Phone:'707-321-8943', birthday: '22/08/1990'},
        {name: 'James Rodriguez', age: 32, Phone:'704-764-2208', birthday: '22/08/1990'},
        {name: 'Darwin Nunez', age: 24, Phone:'452-894-7421', birthday: '22/08/2000'}
      ]
    };
  }
  render() {
    return (
      <div>
\      {this.state.people.map((people, index) => (
  <BasicInfo key={index} people={people}/>  
      ))}
    </div>
      
    )
  }
}

export default App;


