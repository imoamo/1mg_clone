import React from 'react';
import Styles from './HeroSection.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 9
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };

    const responsive_2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const data = [
        {
            "id": "66b2081c289507b229764f42",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2657695f068b4d81b30080f7775639f0.jpg",
            "title": "Dettol Original Germ Protection Mega Saver...",
            "description": "combo pack of 4.0 Packs",
            "delivery": "Tomorrow",
            "mrp": 154,
            "discount": 5,
            "price": 146
        },
        {
            "id": "66b208d1289507b229764f46",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/hseoziza8pxjxba1iyk1.jpg",
            "title": "Dabur Hepano Tablet | For Liver Care &...",
            "description": "bottle of 60.0 tablets",
            "delivery": "Tomorrow",
            "mrp": 150,
            "discount": 7,
            "price": 140
        },
        {
            "id": "66b20963289507b229764f49",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/0e0d2b3e2c8946a49969ae9a2f8f00b8.jpg",
            "title": "Tata 1mg Ortho Heating Belt for Pain...",
            "description": "box of 1.0 Unit",
            "delivery": "Tomorrow",
            "mrp": 1195,
            "discount": 10,
            "price": 1076
        },
        {
            "id": "66b20a56289507b229764f4c",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7e05e39e75324a1ebe2fe5020fc833ba.jpg",
            "title": "AVP Eladi Coconut Oil some unique...",
            "description": "bottle of 200.0 ml Oil",
            "delivery": "Tomorrow",
            "mrp": 210,
            "discount": 10,
            "price": 189
        },
        {
            "id": "66b20ae2289507b229764f4f",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/0641c0d3c0f84dceba249b1f1d75858a.jpg",
            "title": "Nasoclear Saline Nasal Spray | Provides Relief...",
            "description": "bottle of 20.0 ml Nasal Spr...",
            "delivery": "Tomorrow",
            "mrp": 64.35,
            "discount": 12,
            "price": 56.6
        },
        {
            "id": "66b20b4f289507b229764f52",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2e992dd6398e42939fe580bd0c7d6ce4.jpg",
            "title": "Dettol Original Liquid Handwash Refill Pack",
            "description": "packet of 675.0 ml Liquid",
            "delivery": "Tomorrow",
            "mrp": 99,
            "discount": 7,
            "price": 92.1
        },
        {
            "id": "66b20bde289507b229764f55",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e3b6f3ea08b84d26b3f7af22209ba444.jpg",
            "title": "Sugar Free Gold Plus Low Calorie Aspartame...",
            "description": "bottle of 500.0 pellets",
            "delivery": "Tomorrow",
            "mrp": 310,
            "discount": 14,
            "price": 267
        },
        {
            "id": "66b20c54289507b229764f58",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/874c73ab2b3747f68d49263ab2c475ca.jpg",
            "title": "Zincovit Tablet with Multivitamin,...",
            "description": "strip of 15.0 tablets",
            "delivery": "Tomorrow",
            "mrp": 110,
            "discount": 10,
            "price": 99.2
        },
        {
            "id": "66b20cd0289507b229764f5b",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2661631-300c-45a4-a7c3-f46fe9fca127.jpeg",
            "title": "Ahaglow Advanced Skin Rejuvenating Face Wa...",
            "description": "tube of 200.0 gm Face W...",
            "delivery": "Tomorrow",
            "mrp": 798,
            "discount": 13,
            "price": 693
        },
        {
            "id": "66b20d8b289507b229764f5e",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/68f30bace97445e8b0fa6448fb057819.jpg",
            "title": "Vizylac Capsule | For Stomach Care |...",
            "description": "strip of 15.0 capsules",
            "delivery": "Tomorrow",
            "mrp": 83.7,
            "discount": 4,
            "price": 80.3
        },
        {
            "id": "66b20edf289507b229764f61",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/7d5e0cdceee74589a7d35bd85f60c84c.jpg",
            "title": "Asbob Healthcare 3 in 1 Vaporizers, Steamer...",
            "description": "box of 1.0 Unit",
            "delivery": "Tomorrow",
            "mrp": 650,
            "discount": 54,
            "price": 299
        },
        {
            "id": "66b20f70289507b229764f64",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/azjqquytbrhkqt7tqpsg.jpg",
            "title": "Dr Morepen BP 15 Blood Pressure Monitor",
            "description": "box of 1.0 Unit",
            "delivery": "Tomorrow",
            "mrp": 1570,
            "discount": 15,
            "price": 615
        },
        {
            "id": "66b2102c289507b229764f67",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/go85btsyqd6v7yniwm3c.jpg",
            "title": "GOQii Smart Vital Plus with 3 Months Health...",
            "description": "box of 1.0 Unit",
            "delivery": "Tomorrow",
            "mrp": 6499,
            "discount": 41,
            "price": 3857
        },
        {
            "id": "66b210ce289507b229764f6a",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/545a9d2f113749fdb94cacdf01b951cf.jpg",
            "title": "Nycil Cool Herbal Prickly Heat Powder...",
            "description": "bottle of 150.0 gm Powder",
            "delivery": "Tomorrow",
            "mrp": 149,
            "discount": 6,
            "price": 140
        },
        {
            "id": "66b21149289507b229764f6d",
            "img": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/af78a34c19914eef9ffdfc44f833339c.jpg",
            "title": "Excela Moisturiser for Oily & Acne Prone Skin...",
            "description": "pump bottle of 50.0 gm M...",
            "delivery": "Tomorrow",
            "mrp": 522,
            "discount": 7,
            "price": 483
        }
    ];


    return (
        <div className={Styles.main}>

            <div className={Styles.block}>
                <p>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</p>
            </div>

            <div className={Styles.block_2}>

                <div className={Styles.img_1}>
                    <img src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="img_1" />
                </div>

                <div className={Styles.text_1}>
                    <p>Shop by health concerns</p>
                </div>
            </div>
            {/* carousel starting */}

            <div className={Styles.Carousel}>
                <Carousel responsive={responsive}>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto" alt="Diabetes" />
                        <p>Diabetes</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto" alt="Heart Care" />
                        <p>Heart Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto" alt="Stomach Care" />
                        <p>Stomach Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto" alt="Liver Care" />
                        <p>Liver Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto" alt="Bone, Joint & Muscle Care" />
                        <p>Bone, Joint & Muscle Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto" alt="Kidney Care" />
                        <p>Kidney Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto" alt="Derma Care" />
                        <p>Derma Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto" alt="Respiratory Care" />
                        <p>Respiratory Care</p>
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto" alt="Eye Care" />
                        <p>Eye Care</p>
                    </div>
                </Carousel>
            </div>
            {/* banner__2 */}
            <div className={Styles.banner_2}>
                <div className={Styles.banner_2_child}>
                    <p>Full body health checkups</p>
                    <button>SEE ALL</button>
                </div>
            </div>
            {/* banner__2 */}
            {/* checkup_start */}
            <div className={Styles.main_2}>
                <div className={Styles.Carousel_2}>
                    <Carousel responsive={responsive_2}>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Good Health Smart Package</p>

                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>

                            </div>
                            <div className={Styles.f2}>
                                <p>₹399</p>
                                <del>₹800</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Comprehensive Gold Full Bod...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1999</p>
                                <del>₹4498</del>
                                <div className={Styles.green}>
                                    <p>56% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Good Health Silver Package</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹699</p>
                                <del>₹1398</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>


                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Comprehensive Silver Full Bo...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1599</p>
                                <del>₹3798</del>
                                <div className={Styles.green}>
                                    <p>58% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Women Wellness Premium...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1899</p>
                                <del>₹3778</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>


                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Comprehensive Platinum Ful...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹3399</p>
                                <del>₹7198</del>
                                <div className={Styles.green}>
                                    <p>53% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Comprehensive Platinum Ful...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹3399</p>
                                <del>₹7198</del>
                                <div className={Styles.green}>
                                    <p>53% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Good Health Platinum Packa...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1499</p>
                                <del>₹2998</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Good Health Platinum Packa...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1499</p>
                                <del>₹2998</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>


                        <div className={Styles.carousel_item_2}>
                            <div className={Styles.f1}>
                                <p>Senior Citizen Advanced Pac...</p>
                                <div className={Styles.f1_child}>
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" />
                                    <h5>SAFE</h5>
                                </div>
                            </div>
                            <div className={Styles.f2}>
                                <p>₹1719</p>
                                <del>₹3438</del>
                                <div className={Styles.green}>
                                    <p>50% off</p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* checkup_end */}
            {/* banner__3 */}
            <div className={Styles.banner_2}>
                <div className={Styles.banner_2_child}>
                    <p>Featured brands</p>
                    <button>SEE ALL</button>
                </div>
            </div>
            {/* banner__3 */}
            {/* carousel_3 */}
            <div className={Styles.Carousel}>
                <Carousel responsive={responsive}>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497210_Cetaphil.png?format=auto" />
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497215_Aimil.png?format=auto" alt="Heart Care" />
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-07%2F1722416228_AVP.png?format=auto" />

                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497226_Revital+Icon.png?format=auto" alt="Liver Care" />

                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497238_Centrum.png?format=auto" alt="Bone, Joint & Muscle Care" />

                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497249_Protinex1.png?format=auto" alt="Kidney Care" />
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-08%2F1722497259_Himalaya.png?format=auto" alt="Derma Care" />
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206984_Tata+1mg.png?format=auto" alt="Respiratory Care" />
                    </div>
                    <div className={Styles.carousel_item}>
                        <img src="https://onemg.gumlet.io/diagnostics%2F2024-06%2F1719206972_tejasya.png?format=auto" alt="Eye Care" />
                    </div>
                </Carousel>
            </div>
            {/* Carousel_end */}
            {/* banner_4_start */}
            <div className={Styles.banner_2}>
                <div className={Styles.banner_2_child}>
                    <p>Trending now</p>
                    <button>SEE ALL</button>
                </div>
            </div>
            {/* banner_4_end */}
            {/* Carousel_3 start */}
            <div className={Styles.Carousel_3}>
                <Carousel responsive={responsive}>
                    {data.map((item, index) => (

                        <Link to={`/Single/${item.id}`} key={item.id} >
                            <div className={Styles.carousel_item_3} >
                                <div className={Styles.carousel_item_3_child}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className={Styles.texts}>
                                    <p className={Styles.p1}>{item.title}</p>
                                    <p className={Styles.p2}>{item.description}</p>
                                    <p className={Styles.p3}>Delivery by <span>{item.delivery}</span></p>
                                </div>
                                <div className={Styles.misc_info}>
                                    <p className={Styles.misc_1}>MRP</p>
                                    <del className={Styles.misc_2}>₹{item.mrp}</del>
                                    <p className={Styles.misc_3}>{item.discount}% off</p>
                                </div>
                                <p className={Styles.p_4}>₹{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
            {/* Carousel-3-end */}
        </div>
    );
};

export default HeroSection;