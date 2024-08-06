import { Link, Route, Routes } from "react-router-dom";
import Ayurveda from "./components/Ayurveda/Ayurveda";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/Signup/Signup";
import Slider from "./components/Slider/Slider"
import Cart from "./components/Cart/Cart";
import PrivateComponent from "./PrivateComponent";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {

  const All = () => {
    return (
      <>
        <Navbar />
        <Slider />
        <HeroSection />
        <Ayurveda />
        <Footer />
      </>
    )
  };

  return (
    <>

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Single/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={
          <PrivateComponent>
            <Cart />
          </PrivateComponent>
        } />
        <Route path="/*" element={
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
          }}>
            <h1 style={{
              fontSize: '80px',
              margin: '0',
              padding: '0'
            }}>404</h1>
            <h2 style={{
              fontSize: '24px',
              margin: '10px 0',
              padding: '0'
            }}>Page Not Found</h2>
            <p style={{
              fontSize: '18px',
              margin: '10px 0',
              padding: '0'
            }}>Sorry, the page you're looking for doesn't exist.</p>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <button style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}>
                Go Back Home
              </button>
            </Link>
          </div>
        } />
      </Routes>

    </>
  )
}

export default App;
