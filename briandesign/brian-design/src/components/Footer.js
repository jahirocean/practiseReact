import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__subscription">
        <p className="footer__subscription__heading">
          Join the Adventure newsletter to receive our best vacation deal
        </p>
        <p className="footer__subscription__text">
          You can unsubscribe at any time.
        </p>
        <div className="input__area">
          <form>
            <input
              type="email"
              name="email"
              className="footer__input"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn__outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link__items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destination</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link__wrapper">
          <div className="footer__link__items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link__items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="wevsite__rights">TRVL © 2020 </small>
          <div class="social__icons">
            <Link
              class="social__icon__link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social__icon__link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social__icon__link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social__icon__link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social__icon__link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
