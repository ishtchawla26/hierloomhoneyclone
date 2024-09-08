import logo_foot from "../images/logo.png";
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="container">
            <div className="row top_footer gy-5">
                <div className="col-xl-7">
                    <div className="row align-items-center gy-4">
                        <div className="col-md-4">
                            <div className="inner_img">
                                <img src={logo_foot} alt="" className="logo_footer"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="footer_menu">
                                <ul>
                                <Link to="/ourstory">
                                    <li>Our story</li>
                                    </Link>
                                    <a href="#"><li>Our Collection</li></a>
                                  
                                    <Link to="/form"><li>Contact us</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="row gy-3">
                        <div className="col-md-8">
                            <div className="email_subs">
                                <input type="text" id="inputbox" placeholder="Join Our List"/>
                                <button className="btn btn3">Join Now</button>
                            </div>

                        </div>
                        <div className="col-12 col-md-4">
                            <div className="social_icons">
                                <div className="wrap">
                                    <a href=""><img src={fb} alt="facebook"/></a>
                                    <a href=""><img src={instagram} alt="insta"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bootom_footer">
                <div className="text_top">
                    <div className="inner">
                        {/* <!-- <p>Heirloom Honey Co respectfully acknowledges the Noongar people as the traditional custodians
                            of this land.</p> --> */}
                        <div className="in_brdr">
                            <h6></h6>
                        </div>
                    </div>
                </div>
                <div className="inner_wrapper">
                    <div className="left_text">
                        <p className="lft">© Heirloom Honey Co. 2024</p>
                        <p className="rht">Website by <a href="https://okmg.com">OKMG</a></p>

                    </div>
                    <div className="right_text">
                        <a href="" className="rh_lft">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
