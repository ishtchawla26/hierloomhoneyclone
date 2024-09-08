import tree from "../images/tree.png";
import jarrah from "../images/ind_img2_jarrah.png";
import seal_1 from "../images/seal_1.png";
import design from "../images/design.png";
// import marri from  '../images/Marri@2x.png';
// import group_196 from '../images/sealxx.png';
import jarrah_yt from "../images/b.jpeg";
import jarrah_jar from "../images/a.jpeg";
import seal_2 from "../images/sealxx.png";
import marri_yt from '../images/d.jpeg';
import marri_ja from '../images/c.jpeg';
import seal_3 from '../images/seal_3.png';
import yarri_yt from '../images/e.jpeg';
import yarri_jar from '../images/f.jpeg';
import seal_4 from '../images/seal_4.png';
// import seal_2 from "../images/seal_4.png";
import side from "../images/side_view.png";
import video from "../images/video_proto.png";
import golden from "../images/golden_btn.png";
import australia from "../images/Australia_G.png";
import gift from "../images/Gift_symbl.png";
import bee from "../images/bees.png";
import bees from "../images/beekeepers.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <section className="mainbanner1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="inner">
                <h1>
                  The world’s rarest <br /> Jarrah honey
                </h1>
                <Link to="./HarvestJara">
                  <button>DISCOVER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <img src={jarrah} class="img1" alt="" />
              <img src={seal_1} class="img2" alt="" />
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="inner">
                <h5>COLLECTION-LIMITED BATCH</h5>
                <h3>Old-Growth Harvest Honey</h3>
                <p>
                  Organically harvested from ancient forests, home to trees over
                  300 years old, each jar is a pure reflection of its rare and
                  unique origins.
                </p>
                <Link to="./HarvestJara">
                  <button>DISCOVER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={design} className="sec2img" alt="" />
        </div>
      </section>
      <section className="main3">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="inne-1">
                <h5>COLLECTION - SMALL BATCH</h5>
                <h4>Premimum Harvest Honey</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="inner2">
                 <figure>
                            <img src={jarrah_yt} alt="" className="without_hover_img"/>
                            <img src={jarrah_jar} alt="product_gallery" className="gallery_stamp hover_img"/>
                            <img src={seal_2} alt="stamp image" className="stamp"/>
                  </figure>
                <div className="inner">
                  <h5>JARRAH</h5>
                  <p>Date</p>
                  <p>ChestNut</p>
                  <p>Nutmeg</p>
                  <Link to="premiumjara">
                  <button className="btn btn buttn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="inner2">
                 <figure>
                            <img src={marri_yt} alt="" className="without_hover_img"/>
                            <img src={marri_ja} alt="product_gallery" className="gallery_stamp hover_img"/>
                            <img src={seal_3} alt="stamp image" className="stamp"/>
                  </figure>
                <div className="inner">
                  <h5>MARRI</h5>
                  <p>Fruit-forward</p>
                  <p>Confectionary</p>
                  <p>Delicate Raisin Richness</p>
                  <Link to="/premiummarry">
                  <button className="btn btn butn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="inner2">
                 <figure>
                            <img src={yarri_yt} alt="" className="without_hover_img"/>
                            <img src={yarri_jar} alt="product_gallery" className="gallery_stamp hover_img"/>
                            <img src={seal_4} alt="stamp image" className="stamp"/>
                  </figure>
                <div className="inner">
                  <h5>YARRI</h5>
                  <p>Molasses</p>
                  <p>Burnt Caramel</p>
                  <p>Bush Blossom</p>
                  <Link to="/premiumyarry">
                  <button className="btn btn bttn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text">
              <h3>Visit the forests of Heirloom Honey</h3>
            </div>
          </div>
        </div>

        <div className="col-md-12 image">
          <div class="inner">
            <img src={video} alt="" class="img1" />
            <img src={golden} alt="" class="img2" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner1">
                <h5>A REASON FOR GIFTING</h5>
                <h3>Limited Edition Luxury</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="inner inner2">
                <h6>RARITY</h6>
                <img src={australia} alt="" class="imgs" />
                <p>
                  Each prized jar is a symbol of exclusivity and craftsmanship,
                  a delicacy that whispers tales of ancient forests and vibrant
                  blossoms.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="inner inner3">
                <h6>PERSONAL GIFTING</h6>
                <img src={gift} alt="" class="imgs" />
                <p>
                  Delight your loved ones with a gift that transcends ordinary
                  gestures. Our rare honey is a statement of sophistication and
                  thoughtfulness.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="inner inner4">
                <h6>CORPORATE GIFTING</h6>
                <img src={gift} alt="" class="imgs" />
                <p>
                  Elevate your business relationships with a gift that is as
                  rare and exceptional as the partnerships you value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="inner1">
                <img src={tree} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="inner2">
                <h5>LOCATION</h5>
                <h3>Ancient Forests</h3>
                <p>
                  In a pristine corner of Western Australia, free from chemicals
                  and untouched from the rest of the world, lives a dense,
                  ancient forest with towering trees.
                </p>
                <Link to="./ourstory">
                  <button>OUR STORY</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main6">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="inner1">
                <h5>SCIENCE AND TASTE</h5>
                <h3>Nature in Harmony</h3>
                <p>
                  The nectar from the Jarrah flower produces one of the world's
                  most premier honeys. The unmatched health benefits, coupled
                  with a distinctive dark and earthy taste, make this single
                  origin honey highly sought-after.
                </p>
                <Link to="./ourstory">
                  <button>OUR STORY</button>{" "}
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="inner2">
                <img src={bee} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main7">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="inner1">
                <img src={bees} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="inner2">
                <h5>TRADITION AND HERITAGE</h5>
                <h3>An Intuitive Craft</h3>
                <p>
                  The craft of beekeeping runs deep within the Spurge family.
                  Intuitive knowledge has been passed down from one generation
                  to the next since 1850.
                </p>
                <Link to="./ourstory">
                  <button>OUR STORY</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
