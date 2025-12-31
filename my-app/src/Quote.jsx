import "./style.css";
const Quote = () => {
    return (<section className="quote-section">
  <div className="quote-overlay"></div>
  <div className="quote-content">
    <div className="quote-icon"><i className="fas fa-book"></i></div>
    <p className="quote-text">
      “A book is a dream you can hold in your hands,<br />
      where silent pages speak timeless truths.<br />
      It opens the mind to boundless wisdom,<br />
      and guides the seeker toward inner illumination.”
    </p>
    <span className="quote-author">— Ancient wisdom</span>
  </div>
</section>);}
export default Quote;