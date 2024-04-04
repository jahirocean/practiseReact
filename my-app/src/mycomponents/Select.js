import React, {Component} from 'react'

class Select extends Component {

    constructor(){
        super()
        this.state={
            city1: "Dhaka",
            city2: "Rajshai",
            city3: "Chittagong",
            city4: "Sylhet",
            city5: "Khulna",
            show: "",
            auto:""

            
        }
    }

    onChangeHandler=(event)=>{
        var selectedcity= event.target.value;
        this.setState({show:selectedcity, auto:selectedcity});

    }


    render(){
        return(
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                    
                    
                    
                </select>
            </div>

        );
    }
}

export default Select;