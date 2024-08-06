import React, { useEffect, useState } from 'react';
import style from './Cart.module.css';
import Loading from '../../Loading';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCartItem = async () => {
        const Token = localStorage.getItem("Token");
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

    const removeFunc = async (id) => {
        const token = localStorage.getItem("Token");
        setLoading(true);
        try {
            const res = await fetch(`https://onemg-backend-k8zn.onrender.com/product/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            fetchCartItem();
        }
    };

    useEffect(() => {
        fetchCartItem();
    }, []);

    // Calculate total price
    const calculateTotal = () => {
        return product.reduce((total, item) => {
            const price = parseFloat(item.price); // Ensure price is a number
            return total + (isNaN(price) ? 0 : price);
        }, 0).toFixed(2);
    };

    return (
        <div className={style.container}>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <h1 className={style.heading}>Welcome to Cart Page</h1>
                    <Link to="/">
                        <button className={style.button}>Continue Shopping</button>
                    </Link>
                    {/* Display cart total */}
                    <div className={style.totalContainer}>
                        <h2 className={style.totalHeading}>Cart Total:</h2>
                        <p className={style.totalAmount}>₹{calculateTotal()}</p>
                    </div>
                    <div className={style.grid}>
                        {product.length > 0 ? (
                            product.map((el) => (
                                <div key={el._id} className={style.card}>
                                    <div className={style.imageContainer}>
                                        <img src={el.poster} alt={el.title} className={style.image} />
                                    </div>
                                    <div className={style.title}>Title: {el.title}</div>
                                    <div className={style.price}>Price: ₹{parseFloat(el.price).toFixed(2)}</div>
                                    <button className={style.removeButton} onClick={() => removeFunc(el._id)}>
                                        Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className={style.noItems}>No Item Found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
