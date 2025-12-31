
import "./style.css";
import bestseller1 from "./assets/bestseller1.jpg";
import bestseller2 from "./assets/bestseller2.jpg";
import bestseller3 from "./assets/bestseller3.jpg";

const Bestseller = () => {
    return (
<section className="best-sellers">
  <div className="container">
    <div className="section-head">
      <span className="badge">⭐ TOP PICKS</span>
      <h2>Best Sellers</h2>
      <p>Discover the most loved books by our readers worldwide</p>
    </div>
    <div className="books-grid">
     
      <div className="book-card">
        <div className="book-image">
          <img src={bestseller1} alt="" />
        </div>
        <div className="book-info">
          <h3>Caturdasha vidya sthAnAni</h3>
          <div className="rating">★★★★☆ <span>4.9 (289)</span></div>
          <div className="price-row">
            <span className="price">₹699</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="book-card">
        <div className="book-image">
          <img src={bestseller2} alt="" />
        </div>
        <div className="book-info">
          <h3>Vivekacudamani Grammatical Analysis</h3>
          <div className="rating">★★★★☆ <span>4.6 (167)</span></div>
          <div className="price-row">
            <span className="price">₹399</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="book-card">
        <div className="book-image">
          <img src={bestseller3} alt="Philosophy of the East" />
        </div>
        <div className="book-info">
          <h3>Shrimad Bhagavadgita Vyutpatti Jnanakosha</h3>
          <div className="rating">★★★★☆ <span>4.8 (221)</span></div>
          <div className="price-row">
            <span className="price">₹549</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);}
export default Bestseller;