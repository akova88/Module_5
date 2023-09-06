import React, { useContext, useState } from 'react'
import { Box, Container, CssBaseline, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Switch, ThemeProvider, Typography, createTheme, styled } from '@mui/material'
import CustomerCard from './CustomerCard'
import { CustomerContext } from '../context/CustomerContext'
import InboxIcon from '@mui/icons-material/Inbox'
import Brightness3Icon from '@mui/icons-material/Brightness3'
import { AdminPanelSettings } from '@mui/icons-material'

function Home() {
  const { customers } = useContext(CustomerContext)

  const [mode, setMode] = useState('light')
  const customTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  const MyDiv = styled('div')({
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 15
  })

  const MyTypography = styled(Typography)({
    backgroundColor: '#52A388',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: '20px'
  })
  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <CssBaseline />
        <Typography variant='h3' gutterBottom align='center'>
          App to manager customers
        </Typography>
        <MyTypography>This is an app using Material UI 5.</MyTypography>
        <Box>
          <Box>
            <Drawer variant='permanent' anchor='left'>
              <List>
                <ListItem component='a' href='/create'>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Create new Customer' />
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <Brightness3Icon/>
                  </ListItemIcon>
                  <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
                  <ListItemText primary='Swich mode' />
                </ListItem>

                {/* <ListItem component='a' href='/admin'>
                  <ListItemIcon>
                    <AdminPanelSettings />
                  </ListItemIcon>
                  <ListItemText primary='Admin Dashboard' />
                </ListItem> */}
              </List>
            </Drawer>
          </Box>
          <Box ml={15}>
            <Grid container p={5} spacing={5} >
              {
                customers?.map((customer) => (
                  <Grid item xs={4} key={customer.id}>
                    <MyDiv>
                      <CustomerCard customer={customer} />
                    </MyDiv>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home