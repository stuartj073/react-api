import { useEffect, useState } from 'react';
// Use effect allows loadActivity to properly run

function Activities() {
    function loadActivity() {
        setIsLoading(true);
        fetch('http://www.boredapi.com/api/activity/')
            .then((response) => response.json())
            .then((data) => {
                setActivities([...activities, data.activity]);
                setIsLoading(false);
            });
    }
    
    const [activities, setActivities] =  useState([]);
    const [isLoading, setIsLoading] =  useState(true);
    useEffect(() => {
        loadActivity()
    }, []);

    if(isLoading) {
        return <p>Loading...</p>
    }
    
    return  (
        <div>
            <ul>
                {activities.map((activity) => {
                    return <li key={activitiy.key}>{activity.activitiy}</li>
                })}
            </ul>
            <h1>{activity}</h1>
            <button onClick={loadActivity}>Load Another</button>
        </div>
    );
}

export default Activities;


