import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [uName, setUName] = useState('');
    const [uAge, setUAge] = useState();
    const [uEmail, setUEmail] = useState('');
    const [uPwd, setUPwd] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    function pstReq() {
        const url = "http://localhost:5000/"
        console.log("Button am working");

        if (uName == "" || uAge == "" || uEmail == "" || uPwd == "") {
            setErr("Kindly fill All fields");
        }
        else {
            axios.post(url, { name: uName, age: uAge, email: uEmail, pwd: uPwd })
                .then((res) => {
                    console.log(res.data);
                    if (res.data == "User ALready Registered") {
                        setErr(res.data);
                    }
                    else{
                        setErr("");
                        navigate("/login")
                    }
                })
                .catch((err) => { console.log("Request Nai Gai") })
        }
    }

    return (
        <div className="App">

            <div className='contaier'>
                <input type='text' placeholder='Name' value={uName} onChange={(e) => { setUName(e.target.value) }} />
                <br />
                <br />
                <input type='number' placeholder='Age' value={uAge} onChange={(e) => { setUAge(e.target.value) }} />
                <br />
                <br />
                <input type='email' placeholder='Email' value={uEmail} onChange={(e) => { setUEmail(e.target.value) }} />
                <br />
                <br />
                <input type='password' placeholder='Password' value={uPwd} onChange={(e) => { setUPwd(e.target.value) }} />
                <br />
                <br />
                <p>{err}</p>
                <button onClick={pstReq}> Submit </button>
            </div>

        </div>
    );
}

export default Signup
