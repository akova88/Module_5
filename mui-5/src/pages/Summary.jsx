import { Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const columns = [
    {field: 'id', headerName: "ID", width: 100},
    {field: 'name', headerName: "Name", width: 200},
    {field: 'country', headerName: "Country", width: 200},
    {field: 'age', headerName: "Age", width: 200},
    {field: 'job', headerName: "Job", width: 200},
]

const rows = [
    {id: 1, name: 'Jonh Snow', country: 'Australia', age: '18', job: 'Engineer'},
    {id: 2, name: 'Jonh Snow1', country: 'Australia', age: '18', job: 'Web Designer'},
    {id: 3, name: 'Jonh Snow2', country: 'Australia', age: '18', job: 'Engineer'},
    {id: 4, name: 'Jonh Snow3', country: 'Australia', age: '18', job: 'Engineer'},
    {id: 5, name: 'Jonh Snow4', country: 'Australia', age: '18', job: 'Engineer'},
]
function Summary() {
  return (
    <div style={{height: 500, width: '80%', margin: 'auto'}}>
        <Typography 
            variant='h2' 
            align='center'
            gutterBottom
        >
            Summary
        </Typography>
        <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

export default Summary