import "./style.css";
import new1 from "./assets/newarrival-1.jpg";
import new2 from "./assets/newarrival-2.jpg";
import new3 from "./assets/newarrival-3.jpg";
import new4 from "./assets/newarrival-4.jpg";
const Newarrival = () => {
    return (
<section className="new-arrivals">
  <div className="section-header">
    <h2>New Arrivals</h2>
    <a href="#" className="view-all">View All →</a>
  </div>

  <div className="new-arrivals-intro">
    <h3>Timeless Wisdom, Beyond Pages, Beyond Limits</h3>
    <p>
      <strong>Timeless Wisdom, Beyond Pages, Beyond Limits.</strong><br />
      Ancient wisdom re-imagined for today’s seeker.<br />
      Every new publication offers clarity, reflection, and a step toward self-realization.
    </p>
  </div>

  <div className="books-grid">
    
    <div className="book-card">
      <div className="book-image">
        <span className="badge">New</span>
        <img src={new1} alt="Spiritual Awakening" />
      </div>
      <div className="book-info">
        <h3>Sabdavadhanam</h3>
        <div className="price-row">
          <span className="price">₹529</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="book-card">
      <div className="book-image">
        <span className="badge">New</span>
        <img src={new2} alt="Yoga Sutras" />
      </div>
      <div className="book-info">
        <h3>Upavedas</h3>
        <div className="price-row">
          <span className="price">₹479</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="book-card">
      <div className="book-image">
        <span className="badge">New</span>
        <img src={new3} alt="Sacred Mantras" />
      </div>
      <div className="book-info">
        <h3>Sri Tapovanasatakam</h3>
        <div className="price-row">
          <span className="price">₹399</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="book-card">
      <div className="book-image">
        <span className="badge">New</span>
        <img src={new4} alt="Bhagavad Gita" />
      </div>
      <div className="book-info">
        <h3>Suktamanjariy</h3>
        <div className="price-row">
          <span className="price">₹649</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</section>
);}
export default Newarrival;