import React, { Component } from 'react';

class Signupl extends Component {

    constructor(){
        super()
        this.state={
            fname: "",
            lname: "",
            email: "",
            mobile: "",
        }
    }

    onChangeHandler=(event)=>{
        var InputName = event.target.name;
        var InputValue = event.target.value;
        this.setState({[InputName]: InputValue})

        if (InputName==="fname"){

            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(InputValue)){
                this.setState({fname: "First name is not valid"})
            }




        }
        if (InputName==="lname"){
            
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(InputValue)){
                this.setState({lname: "Last name is not valid"})
            }


            
        }
        if (InputName==="email"){
            
            var namePattern=/\S+@\S+\.\S+/;
            if(!namePattern.test(InputValue)){
                this.setState({email: "Email is not valid "})
            }


            
        }
        if (InputName==="mobile"){
            if(!Number(InputValue))
            this.setState({mobile: "Mobile No is not Valid"})



            
        }
    }
    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile No: {this.state.mobile}</p>
                <form>

                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile No"></input><br></br>
                    <input onChange={this.onChangeHandler} name="fname" type="submit" value="Save"></input>
                </form>
            </div>
        );
    }
}

export default Signupl;