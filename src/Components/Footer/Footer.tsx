import './footer.css';
import { ProjectImages } from '../../assets/ProjectImages';

import Button from '../Buttons/Button';
function Footer() {
  return (
    <div className="footer-container">
    <div className="footer-section">
      <div className="left-footer">
        <img src = {ProjectImages.TRISOG_LOGO} />
        <li className="footer-cursive">Need any help?</li>
        <h6>Call Us: (888)12345678</h6>
        <p>
          Love Street, Muscat,Oman <br />
          exaample@trisog.com
        </p>
      </div>
      <div className="mid-footer">
        <div className="company">
          <ul>
            <li className="footer-cursive">Company</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Travel Guide</li>
            <li>Data Policy</li>
          </ul>
        </div>

        <div className="top-destination">
          <ul>
            <li className="footer-cursive">Top Destination</li>
            <li>Las Vegas</li>
            <li>New York City</li>
            <li>San Francisco</li>
            <li>Hawaii</li>
          </ul>
        </div>

        <div className="top-destination">
          <ul>
            <li className="footer-cursive">
              {' '}
              <br />
            </li>
            <li>Tokyo</li>
            <li>Sydney</li>
            <li>Melbourne</li>
            <li>Dubai</li>
          </ul>
        </div>
      </div>
      <div className="right-footer">
        <li className="footer-cursive">Sign up Newsletter</li>
        <input type="text" /> <br />
        <Button name="Submit" handleClick={() => console.log('working')} />
        <br />
        <p>© 2025 Trisog All Right Reserved</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
