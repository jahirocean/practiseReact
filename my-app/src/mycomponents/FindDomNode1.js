import React, { Component } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';

class FindDomNode1 extends Component {

    changeIMG(){
        var container = document.getElementById("imgID");

        ReactDom.findDOMNode(container).src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


    }
    render() {
        return (
            <div>
                <button onClick={this.changeIMG}>Change</button><br></br>
                <img id="imgID" src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>
            </div>
        );
    }
}

export default FindDomNode1;