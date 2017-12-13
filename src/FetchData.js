import React from 'react';
// This gets the data in the format I need. Now I need to get this to set state, or props, or however I can manipulate it and pass it to the DOM.
class FetchData extends React.Component {
    render(){
        const requestURL = 'https://api.myjson.com/bins/119um3';
        const occupationData = fetch(requestURL)
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
      
            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data.occupation['title']);
                console.log(data.occupation['onet']);
                console.log(data.region['title']);
                console.log(data.summary.jobs['year']);
                const doMath = (data.summary.jobs['regional'] / data.summary.jobs['national_avg'] * 100);
                console.log("doMath = " + doMath); //IT WORKS!!! YIPPY!!
                return data;
                return doMath;
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
          
        return(
            <h1>JSON???</h1>
        )
    }
}

export default FetchData;