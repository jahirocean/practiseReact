import React, { Component } from 'react';

class Textarea extends Component {

    constructor(){
        super()
        this.state={
            desc: " ",
            inputMessage: ""

        }
    }

    onChangeHandler=(event)=>{

        var myText=event.target.value;
        this.setState({inputMessage:myText}) 


    }
    render() {
        return (
            <div>
                <textarea placeholder="Your Message" onChange={this.onChangeHandler}/>
                <p>{this.state.inputMessage}</p>
            </div>
        );
    }
}

export default Textarea;