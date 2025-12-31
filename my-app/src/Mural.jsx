import "./style.css";
const Mural = () => {
    return (
<section className="murals">
  <h2 className="murals-title">Murals</h2>
  <div className="murals-wrapper">
    <button className="nav-arrow left">‹</button>
    <div className="murals-track">
      <div className="mural-card">
        <img src="mural1.jpg" alt="Adi Sankara Nilayam" />
        <div className="mural-caption">
          Adi Sankara Nilayam <br /><span>(Melpazhur Mana)</span>
        </div>
      </div>
      <div className="mural-card">
        <img src="mural2.jpg" alt="Vidyarambha" />
        <div className="mural-caption">
          Sri Adi Sankara’s Vidyarambha & Upanayana
        </div>
      </div>
      <div className="mural-card">
        <img src="mural3.jpg" alt="Thrissur Temple" />
        <div className="mural-caption">
          Named after Lord Shiva <br /><span>(Thrissur)</span>
        </div>
      </div>
    </div>
    <button className="nav-arrow right">›</button>
  </div>
  <div className="mural-dots">
    <span className="dot active"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</section>
);}
export default Mural;