import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-title">HOME TO INTROVERTS</span>
        </div>
        
        {/* Search Bar in the middle */}
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search your kind of stories..." className="search-input" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="navbar-links">
          <Link to="/stories" className="stories-btn">Stories</Link>
          <Link to="/login" className="login-btn">Login/Signup</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Feel Free to Share Yourself Here!</h1>
        <p>Let your thoughts flow and be heard. A space for introverts to connect and inspire!</p>
        <Link to="/submitstory" className="submit-story">Submit Story</Link>
      </section>
    </div>
  );
};

export default Home;

 