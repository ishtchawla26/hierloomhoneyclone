

import frame68 from '../images/Frame 68.png';
import frame71 from '../images/Frame 71.png';
import frame69 from '../images/Frame 69.png';
import frame67 from '../images/Frame 67.png';
import frame70 from '../images/Frame 70.png';
import frame64 from '../images/Frame 64.png';





function Honey(){


    return(
        <>
            <section className="premium">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="inner1">
                        <h4></h4>
                        <img src="./images/seal_3.png" alt="" className="img1"/>
                        <img src="./images/Marri@2x.png" alt="" className="img2"/>
                        <div className="row rows">
                            <div className="col">
                                <img src={frame68} alt=""/>
                            </div>
                            <div className="col">
                                <img src={frame71} alt=""/>
                            </div>
                            <div className="col">
                                <img src={frame69} alt=""/>
                            </div>
                            <div className="col">
                                <img src={frame67} alt=""/>
                            </div>
                            <div className="col">
                                <img src={frame70} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="inner2">
                        <h5>Collection - SMALL BATCH</h5>
                        <h3>Premium Harvest
                            Marri Honey</h3>
                        <div className="rg">
                            <img src={frame64} alt="" className="img5"/>
                            <p className="para">26 Reviews</p>
                            <p className="p1">200Y+ FAR</p>
                        </div>
                        <div className="col cols">
                            <h6>$440.00</h6>
                        </div>
                        <p className="pp">What it is and where it’s from. Unique characteristics, properties and benefits. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        <ul>
                            <li>100% natural</li>
                            <li>Made in remote Manuka forests free from pollutants</li>
                            <li>No added sugar</li>
                            <li>Premium harverst honey</li>
                        </ul>
                        <div className="inner">
                           <p>Quantity</p> <input type="number" value="1"/>
                            <button>ADD TO CART</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="ship">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="inner">
                        <h5>Authentic quality you can trust</h5>
                        <p>Eucalyptus marginata, commonly known as the Aboriginal name Jarrah, can grow up to 40 metres tall, with a trunk width to approximately 3 metres.</p>
                        <h4>Shipping</h4>
                        <h4>Where to find this honey</h4>
                        <h4>Packaging</h4>
                        <h4>Nutritional Information 200Y+ FAR</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Honey;