
import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/men-driver-near-lorry-truck-man-owner-truck-driver-near-truck-man-trucker-trucking-owner-transportation-industry-vehicles-handsome-man-driver-front-truck_255667-68210.jpg';
import "./AboutUsBanner.css";
import { FaTruck } from 'react-icons/fa';
import  thor  from '../assets/reetruckvid.mp4';

export const About = () => {
    const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
<div className="relative w-full h-screen overflow-hidden bg-[#2C2A28]">
  <div className="absolute inset-0 overflow-hidden">
    <video
      className="absolute top-0 right-0 w-[40%] h-full object-cover transform -skew-x-12 scale-125"
      src={thor}
      autoPlay
      muted
      loop
    />
  </div>

  {/* Left typography container */}
  <div className="relative z-10 flex flex-col justify-center h-full text-left px-10 md:px-20 max-w-[50%]">
    <h1 className="font-serif text-5xl text-center  md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4">
      About Us
    </h1>
    <p className="text-lg md:text-xl text-center text-gray-300 font-medium leading-relaxed">
      At Reesor & Associates, we go beyond logistics. Discover how we connect, empower, and create with every shipment.
    </p>
  </div>
</div>



  
<div style={{
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#A19A8A' // hide overflow from skew
}}>
  <div style={{
    transform: 'skewY(-10deg)', // skew the section
    backgroundColor: '#2C2A28',
    color: '#fff',
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    padding: '2rem',
  }}>
    {/* Inner content reversed skew */}
    <section style={{
      display: 'flex',
      gap: '3rem',
      flexWrap: 'wrap',
      transform: 'skewY(10deg)', // reverses the skew
      width: '100%',
    }}>
      {/* Left side: Background Image */}
      <div
        style={{
          flex: '1 1 400px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: `80%` ,
          marginTop:`20px`,
          backgroundPosition: 'center',
          borderRadius: '8px',
          minHeight: '500px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
        aria-label="Truck driver near lorry truck"
      />

      {/* Right side: Text content */}
      <div
        style={{
          flex: '2 1 500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 400,
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            color: '#A19A8A',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Our Story
        </h2>

        <h1
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 700,
            fontSize: '3rem',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}
        >
          The Story Behind Ressor
        </h1>

        <p
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            whiteSpace: 'pre-line',
            color: '#e0e0e0',
            height:`100%`,
            maxHeight: '300px',
            overflowY: 'auto',
            paddingRight: '1rem',
          }}
        >
       {`At Reesor & Associates, the strategy is simple: Identify the liable parties — regardless of whether you were hired by a broker, shipper, consignee, or third party. The Bill of Lading (BOL) is more than just a shipping document — it is a legal contract of carriage between the carrier and the shipper. Importantly, the broker is not a party to that contract. When a carrier picks up a load, the BOL governs the terms of transportation, establishes who is responsible for payment, and documents who is receiving the freight. Under federal law and decades of case precedent, this document binds the shipper to the carrier, even when a broker arranges the shipment. If the broker fails to pay, the carrier may still pursue the shipper or consignee for payment under the BOL, especially if:
The shipper is listed on the BOL as the party tendering the freight
The consignee accepted the delivery
Or the BOL includes no language waiving shipper liability
The takeaway: When you deliver freight, the Bill of Lading creates a direct legal relationship between you and the shipper. The broker’s failure to pay does not erase the shipper’s obligation to do so. This is where it gets complicated.
But pursuing vicarious liability isn’t simple. It requires more than just legal theory — it demands a deep understanding of the transportation industry and the legal mechanisms that govern it.
It requires:
Knowledge of relevant case law
Federal and state statutory law
Terms and conditions in the Bill of Lading
Agency and principal relationships in freight transactions`}
        </p>
      </div>
    </section>
  </div>
</div>

    </>
  );
};
