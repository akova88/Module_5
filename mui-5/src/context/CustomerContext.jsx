import React, { createContext, useEffect, useState } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('http://localhost:3001/customers')
            const respJSON = await resp.json()
            setCustomers(respJSON)
        }
        getData();
    }, [])

    const deleteCustomer = async (id) => {
        await fetch(`http://localhost:3001/customers/${id}`, {method: 'DELETE'})
        setCustomers(customers.filter((customer) => customer.id !== id))
    }

    const createCustomer = async ({name, details, gender, rating}) => {
        const resp = await fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, details, gender, rating})
        })
        const data = resp.json();
        setCustomers([data,...customers])
    }
    return (
        <CustomerContext.Provider value={{customers, deleteCustomer, createCustomer}}>
            {children}
        </CustomerContext.Provider>
    )
} 