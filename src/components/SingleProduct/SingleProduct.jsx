import React, { useEffect, useState } from 'react';
import Styles from './SingleProduct.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const AddToCart = async (poster, title, price) => {

        const Token = localStorage.getItem("Token");

        if (Token === null) {
            navigate('/Login');
            return;
        }


        setLoading(true);

        try {
            const res = await fetch(`https://onemg-backend-k8zn.onrender.com/product/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Token}`
                },
                body: JSON.stringify({
                    poster: poster,
                    title: title,
                    price: price
                })

            });

            const data = await res.json();

            navigate("/Cart");

        } catch (error) {
            alert("Failed to Added to Cart")
            console.log(error);

        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://onemg-backend-k8zn.onrender.com/Single/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProduct(data.Single_Product);
                setSelectedImage(data.Single_Product.poster[0]); // Set the default image
                console.log(data.Single_Product);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={Styles.productContainer}>
            <div className={Styles.imageGallery}>
                <div className={Styles.defaultImageContainer}>
                    <img
                        src={selectedImage}
                        alt="Selected Product"
                        className={Styles.defaultProductImage}
                    />
                </div>
                <div className={Styles.thumbnailGallery}>
                    {product.poster.map((image, index) => (
                        <div
                            key={index}
                            className={`${Styles.thumbnail} ${image === selectedImage ? Styles.selected : ''}`}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Product thumbnail ${index + 1}`}
                                className={Styles.productThumbnail}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={Styles.productDetails}>
                <h1 className={Styles.productTitle}>{product.title}</h1>
                <p className={Styles.productPrice}>Price: ₹{product.price}</p>
                <div className={Styles.productFeatures}>
                    <h2>Features:</h2>
                    <ul>
                        {product.feautres.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className={Styles.btn}>
                    <button onClick={() => AddToCart(product.poster[0], product.title, product.price)} disabled={loading} >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
