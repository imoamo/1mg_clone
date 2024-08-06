import Styles from './Footer.module.css';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={Styles.footer}>

            <div className={Styles.shadow}>
                <div className={Styles.heading}>
                    INDIA’S LARGEST HEALTHCARE PLATFORM
                </div>
                <div className={Styles.stats}>
                    <div>
                        <h2>260m+</h2>
                        <p>visitors</p>
                    </div>
                    <div>
                        <h2>31m+</h2>
                        <p>Orders Delivered</p>
                    </div>
                    <div>
                        <h2>1800+</h2>
                        <p>Cities</p>
                    </div>
                </div>
                <div className={Styles.hr}></div>
                <div className={Styles.appLink}>
                    <p>Get the link to download App</p>
                    <input type="text" placeholder="Enter Phone Number" />
                    <button>Send Link</button>
                </div>
            </div>

            <div className={Styles.the_last}>

                <div className={Styles.links}>

                    <div className={Styles.column}>
                        <h3>Know Us</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Press Coverage</li>
                            <li>Careers</li>
                            <li>Business Partnership</li>
                            <li>Become a Health Partner</li>
                            <li>Corporate Governance</li>
                        </ul>
                    </div>

                    <div className={Styles.column}>
                        <h3>Our Policies</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Editorial Policy</li>
                            <li>Return Policy</li>
                            <li>IP Policy</li>
                            <li>Grievance Redressal Policy</li>
                            <li>Fake Jobs and Fraud Disclaimer</li>
                        </ul>
                    </div>

                    <div className={Styles.column}>
                        <h3>Our Services</h3>
                        <ul>
                            <li>Order Medicines</li>
                            <li>Book Lab Tests</li>
                            <li>Consult a Doctor</li>
                            <li>Ayurveda Articles</li>
                            <li>Hindi Articles</li>
                            <li>Care Plan</li>
                        </ul>
                    </div>

                    <div className={Styles.column}>
                        <h3>Connect</h3>
                        <ul>
                            <li>Social Links</li>
                            <div className={Styles.socialLinks}>
                                <a href="#"><ImFacebook2 className={Styles.icons} /></a>
                                <a href="#"><FaInstagramSquare className={Styles.icons} /></a>
                                <a href="#"><FaSquareTwitter className={Styles.icons} /></a>
                                <a href="#"><FaYoutubeSquare className={Styles.icons} /></a>
                                <a href="#"><FaLinkedin className={Styles.icons} /></a>
                            </div>

                            <li>Want daily dose of health?</li>
                            <li>
                                <button>Sign Up</button>
                            </li>
                        </ul>

                    </div>

                    <div className={Styles.downloadApp}>
                        <a href="#">Download APP</a>
                        <div className={Styles.play}>
                            <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*nZu0dsnlCQltPT1QMCHFAA.png" alt="play_store" />
                        </div>
                        <div className={Styles.app}>
                            <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*xqT83bMEz92IBYxS9UQNow.png" alt="app_store" />
                        </div>
                    </div>

                </div>

                <div className={Styles.hr}></div>

                <div className={Styles.trust}>
                    <div>
                        <div>
                            <img src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg" />
                        </div>
                        <h3>Reliable</h3>
                        <p>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.</p>
                    </div>
                    <div>
                        <div>
                            <img src='https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg' />
                        </div>
                        <h3>Secure</h3>
                        <p>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant.</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg" />
                        </div>
                        <h3>Affordable</h3>
                        <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
                    </div>
                </div>
                <div className={Styles.hr}></div>


                <div className={Styles.certifications}>
                    <div>
                        <img width='8%' src='https://onemg.gumlet.io/iso_certification_03_07_2024.jpg' />
                    </div>
                    <p>India's only LegitScript and ISO/IEC 27001:2022 certified online healthcare platform</p>
                </div>
                <div className={Styles.copyright}>
                    <p>© 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule X and habit forming drugs.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
