import { useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';

function Footer() {
    const location = useLocation();
    return (
        <footer>
            <div className="footer-content">
                <p>© 2023 <a style={{ color: 'rgb(0, 0, 0)' }} href="/">Ankith Reddy Avula</a>. All rights reserved.</p>
                {location.pathname === '/projects' && <SocialLinks />}
            </div>
        </footer>
    );
}

export default Footer;
