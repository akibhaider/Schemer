import React, { useState, useEffect } from "react";
import axios from "axios";

const RoutineList = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/routines")
      .then((response) => setRoutines(response.data))
      .catch((error) => console.error("Error fetching routines:", error));
  }, []);

  return (
    <div>
      <h1>Routine List</h1>
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            {routine.department} - {routine.course} ({routine.day_of_week} {routine.start_time} - {routine.end_time})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutineList;
