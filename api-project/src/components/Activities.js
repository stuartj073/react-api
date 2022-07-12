import { useEffect } from 'react';

function Activities() {
    function loadActivity() {
        fetch('http://www.boredapi.com/api/activity')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    
    useEffect(() => {loadActivity});
    
    return <h1>Something fun</h1>
}

export default Activities;