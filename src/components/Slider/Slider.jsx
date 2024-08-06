import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Styles from './Slider.module.css';

const Slider = () => {
    const slideImages = [
        {
            url: 'https://onemg.gumlet.io/397c1135-c26a-46bd-bede-22d767f35064_1712216663.jpg?w=949&h=200&format=auto',
            caption: 'Slide 1'
        },
        {
            url: 'https://onemg.gumlet.io/6e69b9f0-bc77-465b-8877-95784219853d_1715928287.png?w=949&h=200&format=auto',
            caption: 'Slide 2'
        },
        {
            url: 'https://onemg.gumlet.io/9065592d-44aa-47fe-a5bb-3a17eb69ac50_1722422544.jpg?w=949&h=200&format=auto',
            caption: 'Slide 3'
        },
        {
            url: 'https://onemg.gumlet.io/dc1001d8-095b-4df6-bfd1-465517fc0f33_1722422238.jpg?w=949&h=200&format=auto',
            caption: 'Slide 4'
        },
        {
            url: 'https://onemg.gumlet.io/e84d656e-bd74-4e1b-a822-af2a2b035846_1708002794.jpg?w=949&h=200&format=auto',
            caption: 'Slide 5'
        },
        {
            url: 'https://onemg.gumlet.io/3d9636d0-d22c-465c-9710-24d5519fa468_1712576949.png?w=949&h=200&format=auto',
            caption: 'Slide 6'
        },
        {
            url: 'https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=949&h=200&format=auto',
            caption: 'Slide 7'
        },
        {
            url: 'https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=949&h=200&format=auto',
            caption: 'Slide 8'
        }
    ];

    return (
        <div className={Styles.main}>
            <div className={Styles.carouselWrapper}>
                <Carousel
                    autoPlay
                    interval={2000}
                    infiniteLoop
                    showArrows
                    showIndicators
                    showStatus={false}
                    showThumbs={false}
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        return (
                            <span
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: isSelected ? '#007bff' : '#cccccc',
                                    display: 'inline-block',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                    borderRadius: '50%'
                                }}
                                onClick={onClickHandler}
                                key={index} // Add key for list item
                            />
                        );
                    }}
                >
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <img src={slideImage.url} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={Styles.fixed_image}>
                <img src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" alt="banner_1" />
            </div>
        </div>
    );
};

export default Slider;
