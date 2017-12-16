import React from 'react';

const NotFound = () => {
    return(
        <div>
            <h1>Sorry, the page you are looking for does not exist</h1>
            <form action="./">
                <button type="submit">Search Again</button>
            </form>
        </div>
    )
}

export default NotFound;