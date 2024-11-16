import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoutineList = () => {
  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/routines');
      setRoutines(response.data);
    } catch (error) {
      console.error('Error fetching routines:', error);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <div>
      {routines.length ? (
        routines.map((routine) => (
          <div key={routine.id}>
            <h2>{routine.course}</h2>
            <p>{routine.instructor}</p>
            <p>{routine.time} - {routine.day}</p>
          </div>
        ))
      ) : (
        <p>No routines found</p>
      )}
    </div>
  );
};

export default RoutineList;
