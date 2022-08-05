import { Box, Button, Card, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Update.css";
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
    maxWidth: "50%",
    margin: "auto",
    background: "transparent",
    boxShadow: "5px 25px 25px ",
    border: "4px solid black",
  },
  media: {
    height: 140,
  },
  grid: {
    height: "100%",
    alignItems: "center",
  },
  type: {
    textAlign: "center",
  },
  textField: {
    backgroundColor: "transparent",
    fontWeight: 900,
  },
}));
const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleBlur = (event) => {
    const newUserInfo = { ...data };
    newUserInfo[event.target.name] = event.target.value;
    setData(newUserInfo);
  };
  const handleSubmit = (e) => {
    if (id === "srt") {
      fetch("http://localhost:5000/addSemres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    if (id === "ctt") {
      fetch("http://localhost:5000/addCTM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  };
  const classes = useStyles();
  return (
    <div className="text-center  bg">
      {id === "srt" ? (
        <h3 style={{ color: "black" }}>Upload Semester Result</h3>
      ) : (
        <h3 style={{ color: "black" }}>Upload CT Marks & Attendance</h3>
      )}

      {
        id === "srt" ? (
          // <div className=' d-flex justify-content-center p-5' >
          //     <div className='login-border'>
          //         <h3>Upload Semester Result</h3>
          <Card className={classes.card}>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "55ch",
                  maxWidth: "90%",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <form onSubmit={handleSubmit}>
                <TextField
                
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  required
                />
                <br />
                <br />
                <TextField
             
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <TextField
         
                  type="number"
                  name="roll"
                  onBlur={handleBlur}
                  placeholder="Your Roll"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="number"
                  name="series"
                  id="series"
                  onBlur={handleBlur}
                  placeholder="Series"
                  required
                />
                <br />
                <br />
                <TextField
               
                  type="text"
                  name="sem"
                  onBlur={handleBlur}
                  placeholder="Semester"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="gp"
                  onBlur={handleBlur}
                  placeholder="GP"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="sec"
                  onBlur={handleBlur}
                  placeholder="Semester Earn Credit"
                  required
                />
                <br />
                <br />
                <TextField
               
                  type="text"
                  name="gpa"
                  onBlur={handleBlur}
                  placeholder="GPA"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="yec"
                  onBlur={handleBlur}
                  placeholder="Yearly Earn Credit"
                  required
                />
                <br />
                <br />
                <TextField
               
                  type="text"
                  name="tec"
                  onBlur={handleBlur}
                  placeholder="Total Earn Credit"
                  required
                />
                <br />
                <br />
                <TextField
               
                  type="text"
                  name="cgpa"
                  onBlur={handleBlur}
                  placeholder="CGPA"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="log"
                  onBlur={handleBlur}
                  placeholder="Failed Subjects"
                  required
                />
                <br />
                <br />
               <Button variant="contained"
              className="input submit" type="submit">Post</Button>
              </form>
              <br />
            </Box>
          </Card>
        ) : (
          //
          // <div className=' d-flex justify-content-center p-5'>
          //     <div className='login-border'>
          //         <h3>Upload CT Marks & Attendance</h3>
          <Card className={classes.card}>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "55ch",
                  maxWidth: "90%",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <form onSubmit={handleSubmit}>
                <TextField
                
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <TextField
                 
                  type="number"
                  name="roll"
                  onBlur={handleBlur}
                  placeholder="Your Roll"
                  required
                />
                <br />
                <br />
                <TextField
                  
                  type="number"
                  name="series"
                  id="series"
                  onBlur={handleBlur}
                  placeholder="Series"
                  required
                />
                <br />
                <br />
                <TextField
                 
                  type="text"
                  name="sem"
                  onBlur={handleBlur}
                  placeholder="Semester"
                  required
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="cname"
                  onBlur={handleBlur}
                  placeholder="Course Name"
                  required
                />
                <br />
                <br />
                <TextField
                  
                  type="text"
                  name="ct1"
                  onBlur={handleBlur}
                  placeholder="CT1 Marks"
                />
                <br />
                <br />
                <TextField
                 
                  type="text"
                  name="ct2"
                  onBlur={handleBlur}
                  placeholder="CT2 Marks"
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="ct3"
                  onBlur={handleBlur}
                  placeholder="CT3 Marks"
                />
                <br />
                <br />
                <TextField
                
                  type="text"
                  name="ct4"
                  onBlur={handleBlur}
                  placeholder="CT4 Marks"
                />
                <br />
                <br />
                <TextField
                  
                  type="text"
                  name="ap"
                  onBlur={handleBlur}
                  placeholder="Attendace Persentage"
                  required
                />
                <br />
                <br />
                <Button variant="contained"
              className="input submit"  type="submit" >Post</Button>
              </form>
              <br />
            </Box>
          </Card>
        )
        //     </div>
        // </div>
      }
    </div>
  );
};

export default Update;
