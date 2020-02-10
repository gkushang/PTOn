import React, { useState } from 'react';
import { Button, Select, TextField, AppBar, Typography, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker,
    DateTimePicker,
  } from '@material-ui/pickers';

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const ProductDetailHeader = props => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Box mr={2}><Button variant="outlined" color='inherit'>Default</Button></Box>
                    <Button variant="outlined" color='inherit'>Task</Button>
                    <Button variant="outlined" color='inherit'>Duplicate</Button>
                    <Button variant="outlined" color='inherit'>Remote</Button>
                    <Box ml={2}><Button variant="outlined" color='inherit'>Preview</Button></Box>
                </Toolbar>
            </AppBar>
            <Box mt={5}>
                <Grid container alignItems="flex-start" justify="flex-end" direction="row" spacing={2}>
                    <Grid item> 
                        <FormControl variant="outlined">
                        <InputLabel>Language</InputLabel>
                        <Select value={'English'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'English'}>English</MenuItem>
                            <MenuItem value={'French'}>French</MenuItem>
                            <MenuItem value={'Chinese'}>Chinese</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField
                        disabled
                        label="Price (USD)"
                        defaultValue="85"
                        variant="outlined"
                        />
                    </Grid>
                    <Grid item>          
                        <TextField
                            disabled
                            label="Inventory"
                            defaultValue="357,586"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item> 
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                        label="4777 sold"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default ProductDetailHeader;