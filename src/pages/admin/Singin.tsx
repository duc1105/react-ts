import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Singin = (props:any) => {
    // const navigate = useNavigate() 
    const [inputValue, setInputValue] = useState({}) 
    const onHandleChange = (e:any) => { 
        const name = e.target.name
        const value = e.target.value
        setInputValue({...inputValue,[name]:value}); 
    }
    const onHandleSubmit = (e:any) => { 
        e.preventDefault();
        props.onSignin(inputValue)
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={onHandleChange} name='email' placeholder='nhập email' />
                </div>
                <div>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text" onChange={onHandleChange} name="password"  />
                </div>            
                <button type="submit">Add New User</button>
            </form>
        </div>
    )
}

export default Singin
