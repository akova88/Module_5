import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetail() {
    const {studentId} = useParams();
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function getStudentDetail() {
            let response = await fetch(`https://js-post-api.herokuapp.com/api/students/${studentId}`);
            let dataRes = await response.json()
            setStudent(dataRes);
            setLoading(false)
        }
        getStudentDetail()
    }, [])
    return (
        <div className="container">
            <h1>Student Detail</h1>
            {
                loading ? <p>Loading...</p> : (
                    <>
                        <p><span className="fw-bold">Age: </span>{student.age}</p>
                        <p><span className="fw-bold">Mark: </span>{student.mark}</p>
                        <p><span className="fw-bold">Gender: </span>{student.gender}</p>
                        <p><span className="fw-bold">Create at: </span>{moment(student.createdAt).format('DD-MM-YYYY')}</p>
                    </>
                )
            }
            <Link to={'/student/list'} className="btn btn-sm btn-link">Back to student list</Link>
        </div>
    )
}

export default StudentDetail