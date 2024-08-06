import React, { useState } from 'react'
import style from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading';
const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, SetUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`https://onemg-backend-k8zn.onrender.com/user/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await res.json();
      alert("Signup Success");
      navigate("/Login");

    } catch (error) {
      console.log(error);
      alert('Signup failed');

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

            <h3>Sign Up</h3>

            <form id="form" action="" onSubmit={handelSubmit}>
              <label>UserName</label>
              <br />
              <input className={style.input} id="username" type="text" placeholder="User Name" required value={username}
                onChange={(e) => SetUserName(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
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
              <button type="submit" className={style.btn_1}>Sign Up</button>
            </form>
            <div className={style.anchor}> <Link to='/Login'>Already have an account ? Sign In</Link></div>
          </div>
        </div>
      </div>}



    </>
  )
}

export default Signup