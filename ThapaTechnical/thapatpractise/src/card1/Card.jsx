import React from 'react'
import   './Card.css'

function Card () {
    return(
        <div className="card_wrapper">
        <div className="card">
          <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cardBackground" className="card_img" />
          <img src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="profilepic" className="profile_pic" />
          <h1>Michelle Gomes</h1>
          <p className="job_title">Lead Designer</p>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sit officia optio sint nemo quaerat iste voluptates quisquam,
            
          </p>

          <a href="">
            <button className="btn">Contact</button>
          </a>
          <ul className="social_media">
            <li>
              <a href="">
                <i className="fab fa-facebook-square"/>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter-square"/>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-linkedin"/>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram-square"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Card;