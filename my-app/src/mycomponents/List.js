import React, { Component } from 'react';

class List extends Component {
    myDatachild=(data)=>{
    return <option>{data}</option>

    }
    render() {

        const country = ["Bangladesh", "Japan", "India", "Pakistan", "Afganistan", "Iran", "Iraq"]
        const dataitems = country.map(this.myDatachild)
        return (
            <div>
                <select>
                    {dataitems}
                </select>
                
            </div>
        );
    }
}

export default List;