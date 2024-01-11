import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div>
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
          </Link>
          <span className="mb-3 mb-md-0 text-light">© 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <InstagramIcon/>&nbsp;&nbsp;&nbsp;<FacebookIcon/> &nbsp;&nbsp;&nbsp;<TwitterIcon/>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
