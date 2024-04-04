import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = () => {
    const [name, setName] = useState({
        nameF: '',
        nameL: '',
        email: '',
        numberP: '',
    });
    const [fullName, setFullName] = useState({});

    // const [nameL, setNameL] = useState('');
    // const [nameFS,setNameFS] = useState('');
    // const [nameLS, setNameLS] = useState('');
  

    const handleInput = (event) => {
        console.log(event.target.value);
        console.log(event.target.name)
    const {name, value} = event.target;


    setName((preValue)=>{
        console.log(preValue)
        return{
            ...preValue,
           [name]: value,
        }

    })
        // setName((prev)=> {
        //     if(name === 'nameF'){
        //         return{
        //             nameF: value,
        //             nameL: prev.nameL,
        //             email: prev.email,
        //         }     
        //     } else if(name === "nameL"){
        //         return{
        //             nameF: prev.nameF,
        //             nameL: value,
        //             email: prev.email,
        //         }
        //     }else if(name === "email"){
        //         return{
        //             nameF: prev.nameF,
        //             nameL: prev.nameL,
        //             email: value,
        //         }
        //     }else if(name === "numberP"){
        //         return{
        //             nameF: prev.nameF,
        //             nameL: prev.nameL,
        //             email: prev.email,
        //             numberP: value,
        //         }
        //     }
        // })

    }


    const handleSubmit =(event) => {
        event.preventDefault();
       setFullName(name)
        
        
    };


    return (
        <div className="form_container">
            <div className="formWrap">
                <h1>Signup Form</h1>
                <form 
                className="form"
                onSubmit={handleSubmit}
                >
                <label>First Name</label>
                    <input 
                    type="text" 
                    placeholder="First name" 
                    autoFocus required
                    name='nameF'
                    onChange={handleInput}
                    value={name.nameF}                
                    />
                     
                     <label>Last Name</label>
                      <input 
                    type="text" 
                    placeholder="First name" 
                    autoFocus required    
                    name="nameL"
                    onChange={handleInput}
                    value={name.nameL}         
                    />
                      
                      <label>Phone Number</label>
                      <input 
                    type="number" 
                    placeholder="Phone number" 
                    autoFocus required    
                    name="numberP"
                    onChange={handleInput}
                    value={name.numberP}         
                    />

                    <label>Email</label>
                      <input 
                      className="email_input"
                    type="email" 
                    placeholder="Email" 
                    autoFocus required    
                    name="email"
                    onChange={handleInput}
                    value={name.email}         
                    />
                    
                    <button type="submit">Submit</button>
                </form>
                <p>Name: {fullName.nameF} {fullName.nameL} </p>
                <p>Email: {fullName.email}</p>
                <p>Number: {fullName.numberP} </p>
            </div>
        </div>
    )
}

export default SignupForm;