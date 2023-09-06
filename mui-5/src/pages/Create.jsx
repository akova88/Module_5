import React, { useContext, useState } from 'react'
import { Alert, Box, Button, Container, FormControlLabel, Radio, RadioGroup, Rating, Snackbar, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { CustomerContext } from '../context/CustomerContext';

function Create() {
    const {createCustomer} = useContext(CustomerContext)

    const [name, setName] = useState('')
    const [details, setDetail] = useState('')
    const [nameError, setNameError] = useState(false)
    const [detailError,setDetailError] = useState(false)
    const [gender, setGender] = useState('female')
    const [rating, setRating] = useState(1)
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && details) {
            createCustomer({name, details, gender, rating});
            setOpenSnackbar(true)
        }

        if(name === '') {
            setNameError(true)
        } else {
            setNameError(false)
        }
        if(details === '') {
            setDetailError(true)
        } else {
            setDetailError(false)
        }
    }

    const handleClose = () => {
        setOpenSnackbar(false)
    }
    return (
        <Container>
            <Typography variant='h3' gutterBottom align='center' color='#f48fb1'>
                Create a new Customer
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Box pb={3}>
                    <TextField label='Name' variant='standard'
                        fullWidth
                        required
                        onChange={e => setName(e.target.value)}
                        error={nameError}
                    />
                    <TextField label='Detail' variant='standard' fullWidth
                        multiline
                        rows={3}
                        onChange={e => setDetail(e.target.value)}
                        error={detailError}
                    />
                    <RadioGroup row value={gender} onChange={e => setGender(e.target.value)}>
                        <FormControlLabel value='male' control={<Radio />} label='Male'/>
                        <FormControlLabel value='female' control={<Radio />} label='Female'/>
                        <FormControlLabel value='others' control={<Radio />} label='Others'/>
                    </RadioGroup>
                    <Rating value={rating} onChange={e => setRating(+e.target.value)}/>
                </Box>
                <Button
                    type='submit'
                    variant='contained'
                    startIcon={<SendIcon />}
                >Submit</Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={handleClose}
            >
                <Alert severity='success'>
                    Created new customer successfuly!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Create