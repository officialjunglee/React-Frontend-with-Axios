import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Use useEffect to fetch data when the component mounts
        axios.get('http://localhost:8000/viewCategories/') // Replace with your Django server URL
            .then(response => {
                setTasks(response.data); // Update the 'tasks' state with the received data
            })
            .catch(error => {
                console.error('Error fetching tasks: ', error);
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts
    const handleDelete = (taskId) => {
        axios.delete(`http://localhost:8000/category/delete/${taskId}/`)
            .then(response => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.error('Error deleting task: ', error);
            });
    };
    return (
        <div>
            <h1>Categories</h1>
            {/* Display tasks */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.name}</h3>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestComponent;
