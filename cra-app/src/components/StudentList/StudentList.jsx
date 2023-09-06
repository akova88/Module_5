import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList() {
    const [state, setState] = useState({})
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)


    useEffect(()=>{
        setLoading(true)
        async function getData() {
            let response = await fetch(`https://js-post-api.herokuapp.com/api/students?_limit=4&_page=${currentPage}`)
            let dataRes = await response.json();
            setState(dataRes)
            setTotalPage(Math.ceil(Number(dataRes.pagination._totalRows)/Number(dataRes.pagination._limit)))
            setLoading(false)
        }
        getData();
    }, [currentPage])

    const {data, pagination} = state
    return (
        <div className="container mt-5" style={{ height: 'calc(100vh - 210px)' }}>
            <div className="row">
                <ul className="pagination">
                    {
                        [...Array(totalPage)].map((page, index) => (
                            <li key={index} className={`btn btn-sm ${index == currentPage ? 'btn-danger' : 'btn-warning'} mt-5 me-2`}
                            onClick={() => setCurrentPage(index)}
                            >
                                {index +1}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="row">
                {
                    loading ? <p>Loading...</p> : (
                        data?.map((std) => (
                            <div key={std.id} className="col-sm-3 mb-3">
                                <div className="card bg-success text-white">
                                    <div class="card-header">{std.name}</div>
                                    <div className="card-body">
                                        <p><span className="fw-bold">Age: </span>{std.age}</p>
                                        <p><span className="fw-bold">Mark: </span>{std.mark}</p>
                                        <p><span className="fw-bold">Gender: </span>{std.gender}</p>
                                        <p><span className="fw-bold">Create at: </span>{moment(std.createdAt).format('DD-MM-YYYY')}</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link className="btn btn-warning" to={`/student/detail/${std.id}`}>Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default StudentList