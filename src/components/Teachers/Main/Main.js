import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import login from "../../../Images/results.png"
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Modal, TextField } from '@material-ui/core';
import { useState } from 'react';
import bg from '../../../Images/1stb.jfif'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
        margin: 'auto',
        background:'transparent'
    },
    media: {
        height: 140,
    },
    grid: {
        height: '100vh',
        alignItems: 'center',
        backgroundImage:`url(${bg})`,
    },
    type: {
        textAlign: 'center'
    }
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '20%',
    transfrom: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Main = () => {
    const classes = useStyles();
    const { _id } = useParams();
    const [open, setOpen] = useState(false)
    const [series, setSeries] = useState({})
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);
    const handleBlur = (event) => {
        const newUserInfo = { ...series };
        newUserInfo[event.target.name] = event.target.value;
        setSeries(newUserInfo);
    }
    return (
        <div>{_id==='srt'?<h3 className='text-center'>Semester Result</h3>:<h3 className='text-center'>CT Marks & Attendance</h3>}
            <Grid container spacing={3} justifyContent="center" className={classes.grid}>
            
            <Grid item xs={12} sm={6} >


                <Card onClick={handleOpen} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={login}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Check Details
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box sx={style}>
                        <TextField
                            onBlur={handleBlur}
                            label='Series'
                            type='number'
                            name='series'
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            onBlur={handleBlur}
                            label='Semester'
                            type='text'
                            name='sem'
                            InputLabelProps={{ shrink: true }} /><br/><br/>
                        <Link to={`/check/${_id}/${series.series}/${series.sem}`}>
                            <Button variant='contained' color='success'>Search</Button>
                        </Link>
                    </Box>
                </Modal>

            </Grid>
            <Grid item xs={12} sm={6}>
                <Link style={{textDecoration:'none'}} to={`/update/${_id}`}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={login}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Update Details
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Grid>
        </div>
        
    );
};

export default Main;