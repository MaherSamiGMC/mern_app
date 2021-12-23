import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { login } from '../Redux/Actions/userActions'
import { useNavigate } from 'react-router';


function Login() {
    let navigate = useNavigate();
    const [cred, setCred] = useState({})
    const dispatch = useDispatch()
    const handleSignIn=()=>{
        dispatch(login(cred))

    }
    const {userInfo,user} = useSelector(state => state.loginDetails)
    useEffect(() => {
        if (user){
            navigate(`/profile/${user.userId}`)
        }
    },[user])
    return (
        <>
           <Header/> 

           <h1>Log In</h1>
            <div style={{display:'flex',flexDirection:'column',width:300,alignItems:'center'}}>
                <label>user email</label>
                <input type='text' onChange={(e)=>setCred({...cred,email:e.target.value})}/>
                <label>Password</label>
                <input type='password' onChange={(e)=>setCred({...cred,password:e.target.value})} />
                <button onClick={handleSignIn}>log In</button>
            </div>
        </>
    )
}

export default Login
