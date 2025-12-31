import "./style.css";
const Navbar = () => {
    return (<nav className="navbar">
  <div className="nav-left">
    <div className="logo-box">
      <span className="logo-text">|||</span>
    </div>

    <div className="brand">
      <h1 style={{ fontFamily: "Playfair Display, serif" }}>
        Chinmaya International Foundation
      </h1>
      <p>Publications</p>
    </div>
  </div>

  <ul className="nav-links">
    <li className="dropdown">
      <a href="#">About Us &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">About CIF</a></li>
        <li><a href="#">Vision & Mission</a></li>
        <li><a href="#">Adi Sankara Nilayam</a></li>
        <li><a href="#">Research Facilities</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">CIF Excellence Team</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Courses &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Foundation Vedanta</a></li>
        <li><a href="#">Advanced Vedanta</a></li>
        <li><a href="#">Bhagavad Gita</a></li>
        <li><a href="#">Upanishad</a></li>
        <li><a href="#">Master Gita Master Life</a></li>
        <li><a href="#">Svadhyaya Series</a></li>
        <li><a href="#">Hindu Spiritual Care</a></li>
        <li><a href="#">Puja Vidhanam</a></li>
        <li><a href="#">Sanskrit</a></li>
        <li><a href="#">Vedic Maths</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Webinars &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Bhagavad Gita</a></li>
        <li><a href="#">Bhakti</a></li>
        <li><a href="#">Vedanta</a></li>
        <li><a href="#">Upanishad</a></li>
        <li><a href="#">Foundational Text</a></li>
        <li><a href="#">General</a></li>
        <li><a href="#">Sanskrit</a></li>
        <li><a href="#">Vedanta Vijnana Course</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Shravana Mangalam &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Sadhana Podcast</a></li>
        <li><a href="#">Advaita Vedanta</a></li>
        <li><a href="#">Bhakti</a></li>
        <li><a href="#">Sanskrit Language Learning</a></li>
        <li><a href="#">Management & Life Transformation</a></li>
        <li><a href="#">Indian Culture</a></li>
        <li><a href="#">Philosophy</a></li>
        <li><a href="#">Workshops & Seminars</a></li>
        <li><a href="#">Vedic Maths</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Events &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Tamil Vedanta Family Camp</a></li>
        <li><a href="#">Maha Shivaratri Camp</a></li>
        <li><a href="#">Chinmaya International Conference</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Store &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Books</a></li>
        <li><a href="#">Gift Bundles</a></li>
        <li><a href="#">Pendrives</a></li>
        <li><a href="#">Mural Prints</a></li>
      </ul>
    </li>

    <li className="dropdown">
      <a href="#">Resources &#9662;</a>
      <ul className="dropdown-menu">
        <li><a href="#">Blog</a></li>
        <li><a href="#">Forum</a></li>
        <li><a href="#">Downloads</a></li>
        <li><a href="#">Newsletters</a></li>
        <li><a href="#">Celebrating Gurudev</a></li>
        <li><a href="#">CIF Worldwide Events</a></li>
        <li><a href="#">CIF Library</a></li>
        <li><a href="#">User Guidelines</a></li>
      </ul>
    </li>

    <li><a href="#">Donations</a></li>

    <li className="login-item">
      <button className="login-btn">Login</button>
    </li>
  </ul>
</nav>
);}
export default Navbar;
        