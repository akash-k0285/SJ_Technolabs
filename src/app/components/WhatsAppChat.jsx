import React from "react";

const WhatsAppChat = () => {
  const phoneNumber = "919999999999";
  const message = "Hello, I am interested in your services";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>
        {`
          @keyframes zoomInOut {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          style={{
            width: "60px",
            height: "60px",
            cursor: "pointer",
            animation: "zoomInOut 1.5s infinite",
          }}
        />
      </a>
    </>
  );
};

export default WhatsAppChat;
