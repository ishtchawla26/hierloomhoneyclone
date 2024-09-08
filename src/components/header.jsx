import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import React, { useEffect, useState } from 'react';




function Header() {
        const [isSticky, setIsSticky] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
                const offset = window.scrollY;
                if (offset > 100) { 
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            // Clean up the event listener
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    
        return (
            <>
              <header className={isSticky ? "head sticky" : "head"}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand d-lg-none" href="#">
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <div className="inner1">
                                    <div className="dropdown">
                                        <h5><a href="#" className="dropdown-toggle">COLLECTIONS</a></h5>
                                        <div className="dropdown-menu">
                                            <Link to="/">HOME</Link>
                                            <Link to="/Harvestjara">HARVEST JARRAH</Link>
                                            <Link to="/premiumjara">PREMIUM JARRAH</Link>
                                            <Link to="/premiummarry">PREMIUM MARRI</Link>
                                            <Link to="/premiumyarry">PREMIUM YARRI</Link>
                                            <Link to="/form">CONTACT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner2 d-none d-lg-block">
                                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                                </div>
                                <div className="inner3">
                                    <Link to="/ourstory">
                                    <h5>OUR STORY</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    
                
            </>
        )
    };

export default Header;

