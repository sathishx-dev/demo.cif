import "./style.css";
const Footer = () => {
    return (
       
<footer className="cif-footer">
  <div className="cif-footer-container">


    <div className="footer-col contact">
      <h4>Get In Touch</h4>

      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <p>
          Chinmaya International Foundation<br />
          Adi Sankara Nilayam,<br />
          Adi Sankara Marg, Veliyanad<br />
          Ernakulam – 682313<br />
          Kerala, India
        </p>
      </div>

      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <p>office@chininfo.org</p>
      </div>

      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <p>+91-92077-11144</p>
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>

    
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">About CIF</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Celebrating Gurudev</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

   
    <div className="footer-col">
      <h4>Related Websites</h4>
      <ul>
        <li><a href="#">CIFSS</a></li>
        <li><a href="#">Chinmaya Mission</a></li>
        <li><a href="#">Adi Shankaracharya</a></li>
        <li><a href="#">Chinmaya Vishwa Vidyapeeth</a></li>
        <li><a href="#">Chinmaya Swayambhu Ayyappa Temple</a></li>
      </ul>
    </div>

  
    <div className="footer-col wisdom">
      <h4>Words Of Wisdom</h4>
      <blockquote>
        True devotion is not in asking more from God, but in seeking to give oneself more to God.
        <span>– Swami Tejomayananda</span>
      </blockquote>
    </div>

  </div>

  <div className="footer-bottom">
    <p>Copyright © 2025 Chinmaya International Foundation. All Rights Reserved.</p>
  </div>

 
  <a href="#" className="scroll-top"><i className="fas fa-arrow-up"></i></a>
</footer>

    );}
export default Footer;