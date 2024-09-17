import { AiFillHome } from 'react-icons/ai';
import { MdContactPhone } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdDesignServices } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

import { Link, useLocation } from 'react-router-dom';

const MobileNavBar = () => {

  const location = useLocation();
  return (
    <div className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg py-2 d-sm-none" style={{ zIndex: 50, borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <Link to="/" className="d-flex flex-column align-items-center justify-center text-decoration-none text-dark">
            <AiFillHome size={24} className={location.pathname === "/" ? "text-danger" : "" } />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Link to="/about" className="d-flex flex-column align-items-center justify-center text-decoration-none text-dark">
            <FcAbout size={24} className={location.pathname === "/about" ? "text-danger" : "" } />
            <span className="text-xs mt-1 text-secondary">About</span>
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Link to="/founder" className="d-flex flex-column align-items-center justify-center text-decoration-none text-dark">
            <MdDesignServices size={24} className={location.pathname === "/founder" ? "text-danger" : ""} />
            <span className="text-xs mt-1">Founder</span>
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center justify-center">
          <Link to="/gallery-login" className="d-flex flex-column align-items-center justify-center text-decoration-none text-dark ">
            <GoProjectSymlink size={24} className={location.pathname === "/gallery-login" ? "text-danger" : ""} />
            <span className="text-xs mt-1">Gallery</span>
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Link to="/contact" className="d-flex flex-column align-items-center justify-center text-decoration-none text-dark">
            <MdContactPhone size={24} className={location.pathname === "/contact" ? "text-danger" : ""} />
            <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
