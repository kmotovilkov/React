import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styles/Footer.css';


function Footer() {
    return (<div className="footer">
            <div className="socialMedia">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
            </div>
                <p>&copy; 2021 pizza</p>
        </div>

    );
}

export default Footer;