import Image from 'next/image'
import React from 'react'
import ConnectWallet from './ConnectWallet'

const Header = () => {
    return (
        <header className="wow bounceInDown" data-wow-duration="1s">
            <div className="container">
                <div className="d-flex justify-content-start align-items-center my-5">
                    <a href="#"><Image src="/images/Logo.png" alt="Logo of Meta Beer Bottle" draggable="false" className="img-fluid logo" height="70" width="100" /></a>

                    <nav className="ms-auto">
                        <ul className="navbar">
                            {/* <!-- ==================  Active Page Class :-  navActive  ================ --> */}
                            <li className="Close wow fadeIn" data-wow-delay="1s"><i className="far fa-times"></i></li>
                            <li className="nav wow fadeIn" data-wow-delay="1.1s"><a href="#AboutUs" className="navItem NavTxt f-16">ABOUT US</a></li>
                            <li className="nav wow fadeIn" data-wow-delay="1.2s"><a href="#ROADMAP" className="navItem NavTxt f-16">ROADMAP</a></li>
                            <li className="nav wow fadeIn" data-wow-delay="1.3s"><a href="#TEAM" className="navItem NavTxt f-16">TEAM</a></li>
                            <li className="nav wow fadeIn" data-wow-delay="1.4s"><a href="#RareMint" className="navItem NavTxt f-16">RARE MINT</a></li>
                            <li className="nav wow fadeIn" data-wow-delay="1.5s"><a href="https://bottleverse.metabeerbottle.com" className="navItem NavTxt f-16" target="_blank">BOTTLEVERSE</a></li>
                        </ul>
                    </nav>
                    <div className="blackBG"></div>
                    <ConnectWallet />
                    <div className="d-inline-block">
                        <div className="navIcon"><i className="fas fa-bars"></i></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header