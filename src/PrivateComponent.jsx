import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'; // Adjust the import path according to your project structure

const PrivateComponent = ({ children }) => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const Token = localStorage.getItem("Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (Token === null) {
      navigate("/Login");
    } else {
      setLoading(false); // No redirect needed, so set loading to false
    }
  }, [Token, navigate]);

  if (loading) {
    return <Loading />; // Show loading indicator while checking token
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default PrivateComponent;
