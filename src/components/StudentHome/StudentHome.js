import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import bg from "../../Images/1stb.jfif";
import book from "../../Images/book.jpg";
import notice from "../../Images/notice.jpg";
import result from "../../Images/results.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
    margin: "auto",
    background: "transparent",
  },
  media: {
    height: 140,
  },
  grid: {
    height: "100vh",
    alignItems: "center",
    backgroundImage: `url(${bg})`,
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  transfrom: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StudentHome = () => {
  const semester = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"];
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [series, setSeries] = useState({});
  const handleOpen1 = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [admins, setAddmins] = useState([]);
  const handleBlur = (event) => {
    const newUserInfo = { ...series };
    newUserInfo[event.target.name] = event.target.name==='sem' ? semester[event.target.value] :event.target.value ;
    setSeries(newUserInfo);
  };
  useEffect(() => {
    fetch("https://tranquil-plateau-60779.herokuapp.com/teachers/").then(
      (res) =>
        res.json().then((data) => {
          console.log(data);
          setAddmins(data);
        })
    );
  }, []);
  const classes = useStyles();
  const findAdmin = admins.find((admin) => loggedInUser.email === admin.email);
  console.log(findAdmin);
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className={classes.grid}
    >
      <Grid item xs={12} sm={4}>
        {findAdmin ? (
          <Link style={{ textDecoration: "none" }} to="/tupdate/srt">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Check/Update Semester Results!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ) : (
          <div>
            <Card onClick={handleOpen1} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Semester Results
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Modal open={open1} onClose={handleClose1}>
              <Box sx={style} style={{ left: "14%" }}>
                {/* <TextField
                                        onBlur={handleBlur}
                                        label='Semester'
                                        type='text'
                                        name='sem'
                                        InputLabelProps={{ shrink: true }} /> */}
                <InputLabel id="semLebel">
                  {!series.sem && "Semester"}
                </InputLabel>
                <Select
                  labelId="semLevel"
                  id="sem"
                  name="sem"
                  value={series.sem}
                  onChange={handleBlur}
                  autoWidth
                  label="Sem"
                  style={{paddingLeft:'100px'}}
                >
                  {semester.map((val, ind) => {
                    return <MenuItem value={ind}>{val}</MenuItem>;
                  })}
                </Select>
                <Link to={`/seeS/srs/${series.sem}`}>
                  <Button variant="contained" color="success">
                    Search
                  </Button>
                </Link>
              </Box>
            </Modal>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={4}>
        {findAdmin ? (
          <Link style={{ textDecoration: "none" }} to="/tupdate/ctt">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={result}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Check/Update CT Marks & Attendance!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ) : (
          <div>
            <Card onClick={handleOpen2} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    CT Marks & Attendance
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Modal open={open2} onClose={handleClose2}>
              <Box sx={style} style={{ left: "32%" }}>
                {/* <TextField
                                    onBlur={handleBlur}
                                    label='Semester'
                                    type='text'
                                    name='sem'
                                    InputLabelProps={{ shrink: true }} /> */}
                <InputLabel id="semLebel">
                  {!series.sem && "Semester"}
                </InputLabel>
                <Select
                  labelId="semLevel"
                  id="sem"
                  name="sem"
                  value={series.sem}
                  onChange={handleBlur}
                  autoWidth
                  label="Sem"
                  style={{paddingLeft:'100px'}}
                >
                  {semester.map((val, ind) => {
                    return <MenuItem value={ind}>{val}</MenuItem>;
                  })}
                </Select>
                <Link to={`/seeS/cts/${series.sem}`}>
                  <Button variant="contained" color="success">
                    Search
                  </Button>
                </Link>
              </Box>
            </Modal>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={4}>
        {findAdmin ? (
          <div>
            <Card onClick={handleOpen1} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={notice}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Student Informations
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Modal open={open1} onClose={handleClose1}>
              <Box sx={style} style={{ left: "65%" }}>
                <TextField
                  onBlur={handleBlur}
                  label="Series"
                  type="number"
                  name="series"
                  InputLabelProps={{ shrink: true }}
                />
                <Link to={`/sinfot/${series.series}`}>
                  <Button variant="contained" color="success">
                    Search
                  </Button>
                </Link>
              </Box>
            </Modal>
          </div>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/seeS/ats/info">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={notice}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Your Info!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default StudentHome;
