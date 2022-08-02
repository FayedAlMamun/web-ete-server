import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css'
const Update = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const handleBlur = (event) => {
        const newUserInfo = { ...data };
        newUserInfo[event.target.name] = event.target.value;
        setData(newUserInfo);
    }
    const handleSubmit = (e) => {
        if (id === 'srt') {
            fetch("http://localhost:5000/addSemres", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        if (id === 'ctt') {
            fetch("http://localhost:5000/addCTM", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
    }
    return (

        <div className='text-center  bg'>

            {
                id === 'srt' ?

                    <div className=' d-flex justify-content-center p-5' >
                        <div className='login-border'>
                            <h3>Upload Semester Result</h3>
                            <form onSubmit={handleSubmit}>
                                <input className='input' type="text" name="name" onBlur={handleBlur} placeholder='Full Name' required /><br /><br />
                                <input className='input' type="text" name="email" onBlur={handleBlur} placeholder='Email' required /><br /><br />
                                <input className='input' type="number" name="roll" onBlur={handleBlur} placeholder='Your Roll' required /><br /><br />
                                <input className='input' type="number" name="series" id='series' onBlur={handleBlur} placeholder='Series' required /><br /><br />
                                <input className='input' type="text" name="sem" onBlur={handleBlur} placeholder='Semester' required /><br /><br />
                                <input className='input' type="text" name="gp" onBlur={handleBlur} placeholder='GP' required /><br /><br />
                                <input className='input' type="text" name="sec" onBlur={handleBlur} placeholder='Semester Earn Credit' required /><br /><br />
                                <input className='input' type="text" name="gpa" onBlur={handleBlur} placeholder='GPA' required /><br /><br />
                                <input className='input' type="text" name="yec" onBlur={handleBlur} placeholder='Yearly Earn Credit' required /><br /><br />
                                <input className='input' type="text" name="tec" onBlur={handleBlur} placeholder='Total Earn Credit' required /><br /><br />
                                <input className='input' type="text" name="cgpa" onBlur={handleBlur} placeholder='CGPA' required /><br /><br />
                                <input className='input' type="text" name="log" onBlur={handleBlur} placeholder='Failed Subjects' required /><br /><br />
                                <input className='input submit' type="submit" value="Post" />
                            </form><br />
                        </div>
                    </div> :
                    <div className=' d-flex justify-content-center p-5'>
                        <div className='login-border'>
                            <h3>Upload CT Marks & Attendance</h3>
                            <form onSubmit={handleSubmit}>
                                <input className='input' type="text" name="name" onBlur={handleBlur} placeholder='Full Name' required /><br /><br />
                                <input className='input' type="text" name="email" onBlur={handleBlur} placeholder='Email' required /><br /><br />
                                <input className='input' type="number" name="roll" onBlur={handleBlur} placeholder='Your Roll' required /><br /><br />
                                <input className='input' type="number" name="series" id='series' onBlur={handleBlur} placeholder='Series' required /><br /><br />
                                <input className='input' type="text" name="sem" onBlur={handleBlur} placeholder='Semester' required /><br /><br />
                                <input className='input' type="text" name="cname" onBlur={handleBlur} placeholder='Course Name' required /><br /><br />
                                <input className='input' type="text" name="ct1" onBlur={handleBlur} placeholder='CT1 Marks' /><br /><br />
                                <input className='input' type="text" name="ct2" onBlur={handleBlur} placeholder='CT2 Marks' /><br /><br />
                                <input className='input' type="text" name="ct3" onBlur={handleBlur} placeholder='CT3 Marks' /><br /><br />
                                <input className='input' type="text" name="ct4" onBlur={handleBlur} placeholder='CT4 Marks' /><br /><br />
                                <input className='input' type="text" name="ap" onBlur={handleBlur} placeholder='Attendace Persentage' required /><br /><br />
                                <input className='input submit'  type="submit" value="Post" />
                            </form><br />
                        </div>
                    </div>

            }

        </div>
    );
};

export default Update;