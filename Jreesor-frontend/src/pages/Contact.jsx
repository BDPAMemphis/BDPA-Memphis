import React from 'react';
import bg from '../assets/contactframe.jpg';
import { FaTruck } from 'react-icons/fa';

export const Contact = () => {
  const fakeEmail = 'john.doe1234@gmail.com';
  const fakePhone = '+1 (555) 123-4567';

  return (
    <section
      className="relative w-full min-h-screen flex flex-col lg:flex-row pt-16 justify-between items-center bg-cover bg-center px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundPosition: 'center 20px',
      }}
    >
      {/* Left side: contact info */}
      <div
        className="flex flex-col text-white mb-10 lg:mb-72 w-full lg:w-1/2"
        style={{ fontFamily: 'Garamond, serif' }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 flex relative flex-col items-start">
          <span className="inline-flex items-start mt-6">
            <FaTruck className="text-white top-2 absolute text-2xl md:text-3xl" />
          </span>
          <span>We like to hear from you.</span>
        </h1>

        <p className="text-sm mb-2 max-w-md">
          Email, call or complete the form to learn how Ressor Associates can solve your problems with solutions.
        </p>

        <div className="flex flex-wrap gap-4 text-xs md:text-sm">
          <p>{fakeEmail}</p>
          <p>{fakePhone}</p>
        </div>
      </div>

      {/* Right side container */}
      <div className="relative w-full lg:w-1/2 max-w-lg h-full flex justify-center lg:justify-end">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted (not really)');
          }}
          className="relative flex mb-12 flex-col w-full max-w-sm"
          style={{
            top: '0',
            transform: 'none',
            fontFamily: 'Garamond, serif',
            color: 'white',
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2" style={{ maxWidth: '90%' }}>
            Get in touch
          </h1>
          <h2 className="text-sm md:text-base mb-6 ml-1 max-w-xs">
            You can reach us anytime.
          </h2>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white focus:outline-none w-full"
            placeholder="Your name"
            style={{ backgroundColor: '#2C2A28' }}
          />

          <input
            id="email"
            name="email"
            type="email"
            required
            className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white focus:outline-none w-full"
            placeholder="Your Email"
            style={{ backgroundColor: '#2C2A28' }}
          />

          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mb-4 p-2 rounded bg-opacity-20 text-white placeholder-white focus:outline-none resize-none w-full"
            placeholder="How can we help?"
            style={{ backgroundColor: '#2C2A28' }}
          />

          <button
            type="submit"
            className="self-start px-6 py-2 bg-white bg-opacity-30 text-white rounded hover:bg-opacity-50 transition"
            style={{ backgroundColor: '#2C2A28' }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
