import React from "react";
import { Accordion, AccordionSummary, AppBar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Expand, ExpandMore, Home } from '@mui/icons-material';

function Mui5() {
    return (
        <div className="App">
      <AppBar position='static' >
        <Toolbar>
          <Home fontSize='large'/>
          <Typography variant='h5' align='left' sx={{ flexGrow: 1 }} pl={2}>MUI-5</Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Signup</Button>
        </Toolbar>
      </AppBar>
      <Box mt={5}>
        <Typography variant='h1' gutterBottom >MUI-5 App</Typography>
        <Typography variant='h3' gutterBottom >This is a app using MUI-5</Typography>
        <Typography variant='subtitle1' align='justify' mt={5} p={5}>
          This works great when the changes can be isolated to a new DOM element.
          For instance, you can change the margin this way.
          However, sometimes you have to target the underlying DOM element.
          As an example, you may want to change the border of the Button.
          The Button component defines its own styles. CSS inheritance doesn't help.
          To workaround the problem, you can use the sx prop directly on the child if it is a Material UI component.
        </Typography>
      </Box>
      <Grid container spacing={5} p={5}>
        <Grid item xs={4} >
          <Typography paragraph={true} align='justify'>
            This works great when the changes can be isolated to a new DOM element.
            For instance, you can change the margin this way.
            However, sometimes you have to target the underlying DOM element.
            As an example, you may want to change the border of the Button.
            The Button component defines its own styles. CSS inheritance doesn't help.
            To workaround the problem, you can use the sx prop directly on the child if it is a Material UI component.
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}
            aria-controls='panel1-content'
            id='panel1-header'
            >
              <Typography>Bootstrap 5</Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>This is a CSS framework to build website quikly. Bootstrap is very easy to learn</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>} 
            aria-controls='panel2-content'
            id='panel2-header'
            >
              <Typography>MUI 5</Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>This is a CSS framework to build website quikly. This library is good for ReactJS</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMore/>}>
              <Typography>New framework</Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>This is a CSS framework to build website quikly. This library is good for ReactJS</Typography>
            </AccordionSummary>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align='justify'>
            This works great when the changes can be isolated to a new DOM element.
            For instance, you can change the margin this way.
            However, sometimes you have to target the underlying DOM element.
            As an example, you may want to change the border of the Button.
            The Button component defines its own styles. CSS inheritance doesn't help.
            To workaround the problem, you can use the sx prop directly on the child if it is a Material UI component.
            This works great when the changes can be isolated to a new DOM element.
            For instance, you can change the margin this way.
            However, sometimes you have to target the underlying DOM element.
            As an example, you may want to change the border of the Button.
            The Button component defines its own styles. CSS inheritance doesn't help.
            To workaround the problem, you can use the sx prop directly on the child if it is a Material UI component.
          </Typography>
          <FormControl>
            <FormLabel>
              Wich framework would you like to use?
            </FormLabel>
            <RadioGroup row defaultValue='react' name='radio-button-group'>
              <FormControlLabel
                value='bootstrap'
                control={<Radio/>}
                label='Boostrap'
              />
              <FormControlLabel
                value='laravel'
                control={<Radio/>}
                label='Laravel'
              />
              <FormControlLabel
                value='react'
                control={<Radio/>}
                label='React'
              />
              <FormControlLabel
                value='vue'
                control={<Radio/>}
                label='Vue'
              />
              <FormControlLabel
                value='others'
                control={<Radio/>}
                label='Others'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Stack direction='row' spacing={5} paddingTop={15} paddingLeft={50}>
        <Button variant='text'>Click me</Button>
        <Button variant='contained' >Submit</Button>
        <Button variant='outlined' >Sign in</Button>
        <Button variant='disabled' >Disabled</Button>
        <Button variant='contained' color='myColor' startIcon={<DeleteIcon />} >Delete</Button>
        <Button variant='outlined' startIcon={<SendIcon />}>Send</Button>
      </Stack>
    </div>
    )
}

export default Mui5