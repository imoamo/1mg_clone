import React, { useState } from 'react'
import style from './Login.module.css';
import { json, Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`https://onemg-backend-k8zn.onrender.com/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })

            });

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                localStorage.setItem('Token', data.token);
                alert('Login Success');
                navigate("/");

            } else {
                alert('Login failed');
                console.log(res);
            }


        } catch (error) {
            console.log(error);
            alert('Login failed');

        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            {loading ? <Loading /> : <div className={style.background} >

                <div className={style.navbar}>

                    <div>
                        <Link to='/Signup'>Sign Up</Link>
                    </div>
                    <div>
                        <Link to={'/'}>Home Page</Link>
                    </div>
                    <div>
                        <Link to='/Login'>Sign in</Link>
                    </div>

                </div>

                <div className={style.parent}>
                    <div className={style.child}>
                        <div className={style.child_1}>
                        </div>

                        <h3>Sign in</h3>

                        <form id="form" action="" onSubmit={handelSubmit}>
                            <label>EMAIL</label>
                            <br />
                            <input className={style.input} id="email" type="email" placeholder="Email" required value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <br />
                            <br />
                            <br />
                            <label>PASSWORD</label>
                            <br />
                            <input className={style.input} id="password" type="text" placeholder="Password" required value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button type="submit" className={style.btn_1}>Sign in</button>
                        </form>
                        <div className={style.anchor}> <Link to='/Signup'>New to our site ? Sign up</Link></div>
                    </div>
                </div>
            </div>}



        </>
    );
};

export default Login