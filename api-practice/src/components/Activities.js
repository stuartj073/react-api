import { useEffect, useState } from 'react';

function Activities() {
    function loadActivity() {
        setIsLoading(true);
        fetch('http://www.boredapi.com/api/activity')
            .then((response) => response.json())
            .then((data) => {
                setActivities([...activities, data]);
                setIsLoading(false);
            });
    }

    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        loadActivity()
    }, []);

    if(isLoading) {
        <p>Is loading...</p>
    }

    return (
        <div>
            <ul>
                {activities.map((activity) => {
                    return <li key={activity.key}>{activity.activity}</li>
                })}
            </ul>
            <h1>{activity}</h1>
            <button onClick={loadActivity}>Load another</button>
        </div>
    )
}

export default Activities;