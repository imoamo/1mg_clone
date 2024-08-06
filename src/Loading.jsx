import React from 'react';

const Loading = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        height: '100vh',          // Full viewport height
    };

    const spinnerStyle = {
        width: '50px',               // Spinner size
        height: '50px',              // Spinner size
        border: '5px solid rgba(0, 0, 0, 0.1)', // Light border
        borderTop: '5px solid #3498db', // Blue border color
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    return (
        <div style={containerStyle}>
            <div style={spinnerStyle}></div>
            {/* Inline keyframes animation */}
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
};

export default Loading;
