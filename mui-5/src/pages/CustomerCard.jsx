import DeleteIcon from '@mui/icons-material/Delete'
import { Avatar, Card, CardContent, CardHeader, Checkbox, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CustomerContext } from '../context/CustomerContext'
import CustomerModal from './CustomerModel'
import { CheckBox, Favorite, FavoriteBorder, ThumbDown, ThumbDownOutlined } from '@mui/icons-material'

const CustomerCard = ({ customer }) => {
    const { deleteCustomer } = useContext(CustomerContext)

    const stringAvatar = (name) => {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
        }
    }
    return (
        <Card>
            <Avatar {...stringAvatar(customer.name)} sx={{ bgcolor: 'green' }} />
            <CardHeader
                action={
                    <Tooltip title='Delete Customer' placement='bottom-end'>
                        <IconButton onClick={() => deleteCustomer(customer.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                }
                title={customer.name} />
            <CardContent>
                <Typography paragraph align='justify'>
                    {customer.details}
                </Typography>
            </CardContent>
            <CustomerModal customer={customer} />
            <Checkbox 
                icon={<FavoriteBorder/>}
                checkedIcon={<Favorite sx={{color: 'red'}}/>}
            />
            <Checkbox 
                icon={<ThumbDownOutlined />}
                checkedIcon={<ThumbDown />}
                
            />
        </Card>
    )
}

export default CustomerCard