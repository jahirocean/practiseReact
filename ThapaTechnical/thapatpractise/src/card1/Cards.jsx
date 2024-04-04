import React from 'react'
import Card from './Card'
import './Cards.css'

function Cards() {
    return (
        <>
        <section>
          <div className="container">
            <h1 className="Heading">Meet the Team</h1>
            <div className="content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
          </div>
        </section>
      </>
    )
}

export default Cards
