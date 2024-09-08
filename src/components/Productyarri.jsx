import stars from '../images/Frame 64.png';
import marri from '../images/ban5sec2.png';

function Productyarry(){
    return(
        <>
        <section></section>
        <section className="premium">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="inner1">
                        <img src={marri} alt=""/>
                
                       

                </div>
                </div>
                <div className="col-md-6">
                    <div className="inner2">
                        <h5>Collection - SMALL BATCH</h5>
                        <h3>Premium Harvest Yarri Honey</h3>
                        <div className="rg">
                            <img src={stars} alt="" className="img5"/>
                            <p className="para">32 Reviews</p>
                            <p className="p1">200Y+ FAR</p>
                        </div>
                        <div className="col cols">
                            <h6>$380.00</h6>
                        </div>
                        <p className="pp">What it is and where it’s from. Unique characteristics, properties and benefits. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        <ul>
                            <li>100% natural</li>
                            <li>Made in remote Manuka forests free from pollutants</li>
                            <li>No added sugar</li>
                            <li>Premium harverst honey</li>
                        </ul>
                        <div className="inner">
                           <p>Quantity</p> <input type="number" min="1" step="1"/>
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
                        <h4>Nutritional Information 300Y+ FAR</h4>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
        
        </>
    );
}

export default Productyarry;