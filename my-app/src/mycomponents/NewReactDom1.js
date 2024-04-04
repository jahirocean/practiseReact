import React, { Component } from 'react';
import ReactDom from 'react-dom'

class NewReactDom1 extends Component {

    myfun(){
        var container= document.getElementById("myid");
        var element= <h1>My name is Md. Jahir Raihan</h1>
        var callback= function(){
            alert("I am callback")
        }
    
        ReactDom.render(element, container, callback)


    }




    render() {
        return (
            <div>
                <button onClick={this.myfun}>Change</button>
                <h1 id="myid">My name is Jahir</h1>
            </div>
        );
    }
}

export default NewReactDom1;