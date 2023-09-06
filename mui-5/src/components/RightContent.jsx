import { Box } from '@mui/material'
import React from 'react'

function RightContent() {
  return (
    <Box 
    bgcolor='lightgreen' 
    flex={2}
    sx={{display: {xs: 'none', sm: 'block'}}}
    
    >
        <h2>Right Content</h2>
        <p>This is the right content of the page.</p>
    </Box>
  )
}

export default RightContent