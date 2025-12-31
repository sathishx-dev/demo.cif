import "./style.css";
const Contact = () => {
    return (<section className="contact-wrapper">
  <div className="contact-header">
    <h2>Get In Touch</h2>
    <p>Have a question or suggestion? We'd love to hear from you</p>
  </div>
  <div className="contact-grid">
    
    <div className="contact-form">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your full name" />
        <label>Email</label>
        <input type="email" placeholder="your.email@example.com" />
        <label>Message</label>
        <textarea rows="4" placeholder="How can we help you?"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  
    <div className="contact-info">
      <h3>Contact Information</h3>
      <div className="info-item">
        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
        <p>123 Wisdom Street, Knowledge District, Mumbai - 400001</p>
      </div>
      <div className="info-item">
        <span className="icon"><i className="fas fa-phone-alt"></i></span>
        <p>+91 22 1234 5678</p>
      </div>
      <div className="info-item">
        <span className="icon"><i className="fas fa-envelope"></i></span>
        <p>contact@wisdompress.com</p>
      </div>
    </div>
  </div>
</section>);}
export default Contact;