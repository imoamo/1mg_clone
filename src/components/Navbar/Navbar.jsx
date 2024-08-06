import React, { useState, useEffect } from 'react';
import Styles from './Navbar.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [location, setLocation] = useState('');
    const [query, setQuery] = useState('');
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search action here
        console.log('Searching for:', query);
    };

    const Token = localStorage.getItem("Token");

    const Logout = () => {
        localStorage.removeItem("Token");
        window.location.reload();
    };

    const fetchCartItem = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://onemg-backend-k8zn.onrender.com/product", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${Token}`
                }
            });
            const data = await res.json();
            setProduct(data.Product);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItem();
    }, []);

    const cartItemCount = product.length;

    return (
        <div className={Styles.main}>
            {/* 1-flex */}
            <div className={Styles.flex_1}>
                {/* flex_1_child_1 */}
                <div className={Styles.flex_1_child_1}>
                    <div className={Styles.img_1}>
                        <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="tata_logo" />
                    </div>
                    <p style={{ color: 'rgb(255, 111, 97)' }}>MEDICINES</p>

                    <div className={Styles.glow_1}>
                        <p>LAB TESTS</p>
                        <div className={Styles.g1}>SAFE</div>
                    </div>

                    <p>CONSULT DOCTORS</p>

                    <p>CANCER CARE</p>

                    <div className={Styles.glow_2}>
                        <p>PARTNERSHIPS</p>
                        <div className={Styles.g2}>NEW</div>
                    </div>

                    <div className={Styles.glow_3}>
                        <p>CARE PLAN</p>
                        <div className={Styles.g3}>SAVE MORE</div>
                    </div>
                </div>

                {/* flex_1_child_2 */}
                <div className={Styles.flex_1_child_2}>
                    {Token ? <button onClick={Logout} className={Styles.btns}>Logout</button> :
                        <div className={Styles.log_sign}>
                            <Link to={'/Login'}>
                                <p>Login</p>
                            </Link>
                            <p>|</p>
                            <Link to={'/Signup'}>
                                <p>Sign Up</p>
                            </Link>
                        </div>
                    }

                    <p className={Styles.offer}>Offers</p>

                    <Link to={'/Cart'}>
                        <div className={Styles.cart_img}>
                            <img src='https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg' alt='cart_logo' />
                            <div className={Styles.cart_count}>
                                {cartItemCount > 0 ? cartItemCount : '0'}
                            </div>
                        </div>
                    </Link>
                    <p className={Styles.need}>Need Help?</p>
                </div>
            </div>

            {/* 2-flex */}
            <div className={Styles.flex_2}>
                <div className={Styles.flex_2_child_1}>
                    <div className={Styles.location_input_container}>
                        <FaMapMarkerAlt className={Styles.location_icon} />
                        <input
                            type="text"
                            value={location}
                            onChange={handleLocationChange}
                            className={Styles.location_input}
                            placeholder="Enter Your city"
                        />
                    </div>

                    <form className={Styles.search_bar} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search for Medicines and Health Products"
                            className={Styles.search_input}
                        />
                        <button type="submit" className={Styles.search_button}>
                            <CiSearch className={Styles.fas} />
                        </button>
                    </form>
                </div>

                <div className={Styles.flex_2_child_2}>
                    <div className={Styles.img_3}>
                        <img src="https://onemg.gumlet.io/quick_buy_rebrand_lqpnce.svg" alt="thunder_logo" />
                        <p className={Styles.img_3_p}>QUICK BUY! Get 15% off on medicines*</p>
                    </div>

                    <div className={Styles.button_1}>
                        <button>Quick order</button>
                    </div>
                </div>
            </div>

            {/* 3-flex */}
            <div className={Styles.flex_3}>
                <div>
                    <p>Health Resource Center</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Stomach Care</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Vitamins & Nutrition</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Feminine Care</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Healthy Snacks</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Nutritional Drinks</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Glucosamine</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Sexual Wellness</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>

                <div>
                    <p>Fitness Supplements</p>
                    <FaChevronDown className={Styles.chevron} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
