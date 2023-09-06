import { Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function ChipExample() {
    const [languages, setLanguages] = useState([
        { id: 1, label: 'English' },
        { id: 2, label: 'Spanish' },
        { id: 3, label: 'French' },
        { id: 4, label: 'German' },
        { id: 5, label: 'Italian' },
    ])

    const handleDelete = (lang) => {
        console.log(languages);
        const newLanguages = languages.filter(item => item.id !== lang.id);
        console.log(newLanguages);
        setLanguages(newLanguages)
    }
    return (
        <div>
            <h1>Chip Component</h1>
            <Stack direction='row' spacing={3}>
                <Chip label='My first chip'></Chip>
                <Chip label='My second chip' variant='outlined'></Chip>
                <Chip label='My third chip' color='primary'></Chip>
                <Chip label='My fourth chip' color='success'></Chip>
                <Chip label='My fifth chip' color='info'></Chip>
                <Chip label='My sixth chip' color='warning'></Chip>
            </Stack>
            <Stack direction='row' spacing={3} paddingTop={5} paddingLeft={20}>
                {
                    languages?.map(lang => (
                        <Chip
                            key={lang.id}
                            label={lang.label}
                            onDelete={() => handleDelete(lang)}
                        />
                    ))
                }
            </Stack>

        </div>
    )
}
