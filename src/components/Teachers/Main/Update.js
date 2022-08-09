import {
  Box,
  Button,
  Card,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
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
  const course = {
    s2: [
      "Power Electronics",
      "Analog Electronics 2",
      "EM Field & Waves",
      "Complex Variable & Statistics",
      "Communication Theory",
    ],
    f1: [
      "Electrical Circuit Theory",
      "Computer Fundamentals & Programming",
      "Physics",
      "Calculas & Differentil Equation",
      "English Communication",
    ],
    t2: [
      "Information Theory",
      "Antenna & Propagation",
      "Digital Communication",
      "Digital Signal Processing",
      "Microprocessor & Interfacing",
    ],
    f2: [
      "Solid State Device",
      "Digital Electronics",
      "Network Analysis & Synthesis",
      "Energy Coversion",
      "Linear Algebra",
    ],
    s1: [
      "Analog Electronics 1",
      "Signal & System",
      "Data Structure & Algorithm",
      "Economics",
      "Partial Differential Equation",
    ],
    t1: [
      "Random Signal Processing",
      "Microwave Engineering",
      "Numerical Method",
      "Control System",
      "Measurement & Instrumentation",
    ],
    l1: [
      "VLSI Design",
      "Data communication",
      "Wireless Communication",
      "Fiber Optic",
      "Elective 1",
    ],
    l2: [
      "Radio & TV Engineering",
      "Telecommunication Engineering",
      "Satellite Communication",
      "Elective 2",
      "Project Planning",
    ],
  };
  const semester = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"];
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleBlur = (event) => {
    const newUserInfo = { ...data };
    newUserInfo[event.target.name] =
      event.target.name === "cname"
        ? (data.sem === "2-2" && course.s2[event.target.value]) ||
          (data.sem === "1-1" && course.f1[event.target.value]) ||
          (data.sem === "1-2" && course.f2[event.target.value]) ||
          (data.sem === "2-1" && course.s1[event.target.value]) ||
          (data.sem === "3-1" && course.t1[event.target.value]) ||
          (data.sem === "3-2" && course.t3[event.target.value]) ||
          (data.sem === "4-1" && course.l1[event.target.value]) ||
          (data.sem === "4-2" && course.l2[event.target.value])
        : event.target.name === "sem"
        ? semester[event.target.value]
        : event.target.value;

    setData(newUserInfo);
  };
  const handleSubmit = (e) => {
    if (id === "srt") {
      fetch("https://tranquil-plateau-60779.herokuapp.com/addSemres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    if (id === "ctt") {
      fetch("https://tranquil-plateau-60779.herokuapp.com/addCTM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    e.preventDefault();
  };
  const classes = useStyles();
  return (
    <div className="text-center  bgu">
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
                {/* <TextField
                  type="text"
                  name="sem"
                  onBlur={handleBlur}
                  placeholder="Semester"
                  required
                /> */}
                <InputLabel id="semLebel">{!data.sem && "Semester"}</InputLabel>
                <Select
                  labelId="semLevel"
                  id="sem"
                  name='sem'
                  value={data.sem}
                  onChange={handleBlur}
                  autoWidth
                  label="Sem"
                >
                  {semester.map((val, ind) => {
                    return <MenuItem value={ind}>{val}</MenuItem>;
                  })}
                </Select>
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
                <Button
                  variant="contained"
                  className="input submit"
                  type="submit"
                >
                  Post
                </Button>
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
                {/* <TextField
                  type="text"
                  name="sem"
                  onBlur={handleBlur}
                  placeholder="Semester"
                  required
                /> */}
                <InputLabel id="semLebel">{!data.sem && "Semester"}</InputLabel>
                <Select
                  labelId="semLevel"
                  id="sem"
                  value={data.sem}
                  onChange={handleBlur}
                  autoWidth
                  label="Sem"
                  name='sem'
                >
                  {semester.map((val, ind) => {
                    return <MenuItem value={ind}>{val}</MenuItem>;
                  })}
                </Select>
                <br />
                <br />
                {/* <TextField
                
                  type="text"
                  name="cname"
                  onBlur={handleBlur}
                  placeholder="Course Name"
                  required
                /> */}
                <InputLabel id="courseLebel">
                  {!data.cname && "Course Name"}
                </InputLabel>

                <Select
                  fullWidth
                  labelId="courseLebel"
                  id="course"
                  name="cname"
                  value={data.cname}
                  onChange={handleBlur}
                  label="Course Name"
                  placeholder="ccc"
                >
                  {data.sem === "1-1" &&
                    course.f1.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "1-2" &&
                    course.f2.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "2-1" &&
                    course.s1.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "2-2" &&
                    course.s2.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "3-1" &&
                    course.t1.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "3-2" &&
                    course.t2.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "4-1" &&
                    course.l1.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                  {data.sem === "4-2" &&
                    course.l2.map((val, ind) => {
                      return <MenuItem value={ind}>{val}</MenuItem>;
                    })}
                </Select>

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
                <Button
                  variant="contained"
                  className="input submit"
                  type="submit"
                >
                  Post
                </Button>
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
