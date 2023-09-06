import React, { useEffect, useState } from "react";

function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [totalCustomer, setTotalCustomer] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [pageable, setPageable] = useState({
        kw: "",
        page: 1,
        limit: 2,
        sort: "id",
        order: "asc"
    })

    const getCustomers = async () => {
        const { kw, page, limit, sort, order } = pageable;
        let response = await fetch(`http://localhost:28001/api/customers?kw=${kw}&page=${page}&limit=${limit}&sort-by=${sort}&order=${order}`)
        let data = await response.json();
        setCustomers(data.customers.content);
        setTotalCustomer(data.customers.totalElements);
        setTotalPage(data.customers.totalPages);
    }

    useEffect(() => { getCustomers() }, [pageable])

    const handleSetPageable = (param, value) => {
        
        setPageable(() => {
            return {
                ...pageable,
                [param]: value
            }
        })
        if (param == 'kw') {
            setPageable(() => {
                return {
                    ...pageable,
                    [param]: value,
                    page: 1
                }
            })
        }

    }
    const handleSort = (e) => {
        const sort = e.currentTarget.getAttribute('data-sortBy');
        setPageable({
            ...pageable,
            order:  pageable.order == "asc" ? "desc" : "asc",
            sort
        })
       
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8"><h2>Customer <b>Details</b></h2></div>
            </div>
            <div className="row justify-content-between">
                <div className="col-sm-2">
                    <div className="show-entries">
                        <span>Show</span>
                        <select onChange={(e) => handleSetPageable("limit", e.target.value)}>
                            <option>2</option>
                            <option>3</option>
                            <option>5</option>
                        </select>
                        <span>entries</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="search-box">
                        <input type="text" className="form-control" placeholder="Search…"
                            onInput={(e) => handleSetPageable("kw", e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <table className="table table-striped mb-0" id="table1">
                <thead>
                    <tr>
                        <th onClick={handleSort} data-sortBy='id'>#</th>
                        <th onClick={handleSort} data-sortBy='fullName'>Name</th>
                        <th onClick={handleSort} data-sortBy='email'>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Ethnic</th>
                        <th>Identity Number</th>
                        <th>Province</th>
                        <th>Job</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        customers.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.fullName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.ethnic}</td>
                                    <td>{customer.identityNumber}</td>
                                    <td>{customer.locationRegion.provinceName}</td>
                                    <td>{customer.job}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="row justify-content-between mt-3">
                <div className="col-sm-3">Showing <b>{pageable.limit}</b> out of <b>{totalCustomer}</b> entries</div>
                <div className="col-sm-2 d-flex justify-content-between align-items-center ">
                <button className="btn btn-sm btn-primary"
                    onClick={() => handleSetPageable("page", pageable.page-1)} 
                    disabled={pageable.page === 1}
                    >Lùi
                    </button>
                    <div className=""><a href="#" className="page-link">{pageable.page}</a></div>
                    <button className="btn btn-sm btn-primary"
                    onClick={() => handleSetPageable("page", pageable.page+1)} 
                    disabled={pageable.page === totalPage}
                    >Tới
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomerList