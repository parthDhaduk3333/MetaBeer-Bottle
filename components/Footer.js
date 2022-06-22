import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footBg">
                <div className="container">

                    <div className="row">
                        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center my-5">
                            <a href="#" className="mb-3 mb-lg-0 wow fadeIn" data-wow-delay="0.5s"><Image src="/images/Logo.png" alt="Logo of Meta Beer Bottle" draggable="false" className="img-fluid logo" height="70" width="90" /></a>
                            <nav className="ms-lg-auto mb-3 mb-lg-0">
                                <ul className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                                    <li className="nav py-2 wow fadeIn" data-wow-delay="0.6s"><a href="#AboutUs" className="navFootItem NavTxt f-16">ABOUT US</a></li>
                                    <li className="nav py-2 wow fadeIn" data-wow-delay="0.7s"><a href="#ROADMAP" className="navFootItem NavTxt f-16">ROADMAP</a></li>
                                    <li className="nav py-2 wow fadeIn" data-wow-delay="0.8s"><a href="#TEAM" className="navFootItem NavTxt f-16">TEAM</a></li>
                                    <li className="nav py-2 wow fadeIn" data-wow-delay="0.9s"><a href="#RareMint" className="navFootItem NavTxt f-16">RARE MINT</a></li>
                                    <li className="nav py-2 wow fadeIn" data-wow-delay="1s"><a href="#BOTTLEVERSE" className="navFootItem NavTxt f-16">BOTTLEVERSE</a></li>
                                </ul>
                            </nav>
                            <div className="socialMedia ms-3 d-flex justify-content-center align-items-center">

                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.1s">
                                        <Image src="/images/discord.png" alt="Discord Icon" className="img-fluid socialIcon " draggable="false" height={50} width={50} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.2s">
                                        <Image src="/images/telegram.png" alt="Telegram Icon" className="img-fluid socialIcon " draggable="false" height={50} width={50} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.3s">
                                        <Image src="/images/linkedin.png" alt="Linkedin Icon" className="img-fluid socialIcon " draggable="false" height={50} width={50} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.4s">
                                        <Image src="/images/twitter.png" alt="Twitter Icon" height={50} width={50} className="img-fluid socialIcon " draggable="false" />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.5s">
                                        <Image height={50} width={50} src="/images/facebook.png" alt="Facebook Icon" className="img-fluid socialIcon " draggable="false" />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="socialMainHvr wow fadeIn" data-wow-delay="1.6s">
                                        <Image height={50} width={50} src="/images/instagram.png" alt="Instagram Icon" className="img-fluid socialIcon " draggable="false" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="copyrights overReg text-center mb-4">Copyright © 2022 MetaBeer Bottle. All Rights Reserved.</div>
            </div>
        </footer>
    )
}

export default Footer