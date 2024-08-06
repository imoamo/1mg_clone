import React from 'react'
import Styles from './Ayurveda.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Ayurveda = () => {

    const responsive = {
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
    return (
        <div className={Styles.main}>

            <div className={Styles.banner_2}>
                <div className={Styles.banner_2_child}>
                    <p>Ayurveda</p>
                    <button>SEE ALL</button>
                </div>
            </div>

            {/* carousel starting */}

            <div className={Styles.Carousel}>
                <div className={Styles.child}>


                    <Carousel responsive={responsive}>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/wsefpczhghkqf0hw8tej.jpg" />
                            <p>Wheatgrass</p>
                            <p>Wheatgrass is known as Gehun, Kanak in Ayurveda calls it is Godhuma. Wheatgrass juice...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/qf6foj1ecxfkbtjvibz0.jpg" />
                            <p>Shatavari</p>
                            <p>Shatavari is an Ayurvedic rasayana herb which is also known as the female-friendly he...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/xcyxzwfyinrizijahzoe.jpg" />
                            <p>Reetha</p>
                            <p>Reetha or Soapnuts is also called as Arishtak in Ayurveda and “Soap nut tree” in Indi...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/rakfbluf7mhf8qsfmcec.jpg" />
                            <p>Peas</p>
                            <p>Pea or Matar is an edible green seed with various medicinal properties. Green peas ar...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/qgyjmltpxtbcvd9yfcw0.jpg" />
                            <p>Alsi</p>
                            <p>Alsi or Flax seeds are important oil seeds which are used for various medicinal benef...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/jyyzqovfwci6az46xmpc.jpg" />
                            <p>Arjuna</p>
                            <p>Arjuna also known as the “Arjun tree” is a widely grown tree in India. It has various...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/ayywlnwbshdwibuotbfj.jpg" />
                            <p>Bael</p>
                            <p>Bael or “Shivaduma ” also known as the tree of Lord Shiva is of sacred value in India...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/pjygoitnwgrsqmaummpl.jpg" />
                            <p>Nutmeg</p>
                            <p>Nutmeg or Jaiphal is a seed that can be ground and is commonly used as a spice. The f...</p>
                        </div>
                        <div className={Styles.carousel_item}>
                            <img src="https://onemg.gumlet.io/onlnla8oz23qyekearz7.jpg" />
                            <p>Mustard oil</p>
                            <p>Mustard oil, commonly known as Sarso ka Tel, is extracted from the seeds of mustard p...</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* carousel ending */}

            <div className={Styles.banner_2}>
    
            </div>
            {/* texts_start */}
            <div className={Styles.container}>
                <header className={Styles.header}>
                    <h1>Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</h1>
                    <h2>We Bring Care to Health.</h2>
                    <p>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</p>
                </header>

                <section className={Styles.content}>
                    <div className={Styles.section}>
                        <h2>Tata 1mg: Your Favourite Online Pharmacy!</h2>
                        <p>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.</p>
                        <p>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</p>
                        <p>In case you need assistance, just give us a call and we will help you complete your order.</p>
                        <p>And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</p>
                        <p>Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</p>
                    </div>

                    <div className={Styles.section}>
                        <h2>The Feathers In Our Cap</h2>
                        <p>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</p>
                    </div>

                    <div className={Styles.section}>
                        <h2>The Services We Offer</h2>
                        <p>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</p>
                        <p>We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</p>
                        <p>Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists look into each order to give you a fulfilling experience.</p>
                        <p>We've made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</p>
                        <p>Visit our online medical store now, and avail online medicine purchase at a discount.</p>
                        <p>Stay Healthy!</p>
                    </div>
                </section>
            </div>
            {/* texts_end */}

        </div>
    );
};

export default Ayurveda