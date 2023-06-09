import { useState } from "react";
import "../Styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div className="main-navbar">
            <div className="main-logo">
                <img src="https://www.transportsimple.com/redesign/images/logo.png" alt="transportsimple-logo" />
            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Feature</a>
                    </li>
                    <li>
                        <a href="">Industry</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className="main-demo">
                <a href="">
                    <button>Get Demo</button>
                </a>
            </div>
            <div className="hamburger-icon">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    {showMediaIcons ? <RxCross1 /> : <GiHamburgerMenu />}
                </a>
            </div>
        </div>
    )
}

export default Navbar;