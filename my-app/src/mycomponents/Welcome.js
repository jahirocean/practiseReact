import React,{Component} from 'react';

class Welcome extends Component{

    constructor(){

        super()


        this.state={

            name:"Jahir",
            age:["25","34","23","32"],
            height:"5 feet",
            weight:{

                class7:"32", 
                class8:"40",
                class9:"50"


            }
        }



        
      
    }


    render(){

    return <div>
        <h1>My name is: {this.state.name}</h1>
        <h1>My age is: {this.state.age[2]}</h1>
        <h1>My height is: {this.state.height}</h1>
        <h1>My weight is: {this.state.weight.class7}</h1>
    </div>
    }

}

export default Welcome;