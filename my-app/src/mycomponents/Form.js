import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state={
            username: " "
            
        }
    }




    onChangeHandler=(event)=>{
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]: myvalue})





    }
    render() {
        return (
            <div>
                <form>
                    <p>My first form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br></br><br></br>
                    <input type="submit" value="Submit Now"></input>


                </form>
            </div>
        );
    }
}

export default Form;