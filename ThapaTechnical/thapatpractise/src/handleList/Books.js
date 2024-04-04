import React from 'react'
import Book from './Book'

const Books = () => {
    return (
        <div className="conatainer text-center p-5 flex-column justify-content-center">
            <h1 className=" text-primary">Book Store</h1>
            <Book/>
        </div>
    )
}

export default Books
