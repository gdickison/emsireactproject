// I got this from CodePen. Will it work?
import React from 'react';

class Application extends React.Component {
    callApi(){
      // Call the API page
      fetch('https://api.myjson.com/bins/119um3')
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);
      })
    }
    
    render() {
      return <div>
          {/* This would include a form with inputs for occupation, region, and years */}
        <button onClick={() => this.callApi()}>
          Click here to call API
        </button>
      </div>;
    }
  }
  
//   I'd need to create a route for this.
  React.render(<Application />, document.getElementById('app'));