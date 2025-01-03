// import React, { useState } from 'react';

// const CourseForm = () => {
//     const [courseCode, setCourseCode] = useState('');
//     const [courseName, setCourseName] = useState('');
//     const [creditHours, setCreditHours] = useState('');

//     const onSubmitForm = async (e) => {
//         e.preventDefault();
//         try {
//             const body = { 
//                 course_code: courseCode,
//                 course_name: courseName,
//                 credit_hours: parseFloat(creditHours)
//             };
//             const response = await fetch('http://localhost:5000/api/courses', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(body)
//             });
            
//             if (response.ok) {
//                 window.location.reload();
//             }
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Add Course</h2>
//             <form onSubmit={onSubmitForm}>
//                 <div className="form-group">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={courseCode}
//                         onChange={e => setCourseCode(e.target.value)}
//                         placeholder="Course Code"
//                         required
//                     />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={courseName}
//                         onChange={e => setCourseName(e.target.value)}
//                         placeholder="Course Name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group mt-3">
//                     <input
//                         type="number"
//                         step="0.5"
//                         className="form-control"
//                         value={creditHours}
//                         onChange={e => setCreditHours(e.target.value)}
//                         placeholder="Credit Hours"
//                         required
//                     />
//                 </div>
//                 <button className="btn btn-success mt-3">Add</button>
//             </form>
//         </div>
//     );
// };

// export default CourseForm;
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const CourseForm = () => {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [creditHours, setCreditHours] = useState('');
    const [programName, setProgramName] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { 
                course_code: courseCode,
                course_name: courseName,
                credit_hours: parseFloat(creditHours),
                program_name: programName
            };
            const response = await fetch('http://localhost:5000/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Course</h2>
            <form onSubmit={onSubmitForm}>
                <Row>
                    <Col md={6}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={courseCode}
                                onChange={e => setCourseCode(e.target.value)}
                                placeholder="Course Code"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={courseName}
                                onChange={e => setCourseName(e.target.value)}
                                placeholder="Course Name"
                                required
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6}>
                        <div className="form-group">
                            <input
                                type="number"
                                step="0.5"
                                className="form-control"
                                value={creditHours}
                                onChange={e => setCreditHours(e.target.value)}
                                placeholder="Credit Hours"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={programName}
                                onChange={e => setProgramName(e.target.value)}
                                required
                            >
                                <option value="">Select Program Name</option>
                                <option value="CSE">CSE</option>
                                <option value="SWE">SWE</option>
                                <option value="EEE">EEE</option>
                                <option value="ME">ME</option>
                                <option value="IPE">IPE</option>
                                <option value="CEE">CEE</option>
                                <option value="BTM">BTM</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <button className="btn btn-success mt-3">Add</button>
            </form>
        </div>
    );
};

export default CourseForm;
