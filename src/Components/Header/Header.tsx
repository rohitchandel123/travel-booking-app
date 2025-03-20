import './header.css';

function Header() {
  return (
    <div className="header-section">
      <div className="left-header">
        <div className="header-logo">
          <span>an image</span>
        </div>
        <div className="header-items">
          <li>Home</li>
          <li>About</li>
          <li>Tours</li>
          <li>Destination</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </div>
      </div>
      <div className="right-header">
        <i className='fa-solid fa-magnifying-glass'></i>
        <i className='fa-regular fa-user'></i>
        <p>Login / Signup</p>
      </div>
    </div>
  );
}

export default Header;
