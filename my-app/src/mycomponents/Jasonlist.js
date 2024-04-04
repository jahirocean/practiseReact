import React, { Component } from 'react';

class Jasonlist extends Component {
    render() {

        const mylist = [
            {
                city:"Dhaka",
                Zip:"2000"

            },
            {
                city:"Chittagong",
                Zip:"3000"

            },
            {
                city:"Khulna",
                Zip:"4000"
            }
        ]

        const dataItemcity = mylist.map((datacity)=>{
        return <option>{datacity.city}</option>
        });

        const dataItemzip = mylist.map((datazip)=>{
            return <option>{datazip.Zip}</option>
            });


        return (
            <div>
                <select>{dataItemcity}</select>
                <select>{dataItemzip}</select>
            </div>
        );
    }
}

export default Jasonlist;