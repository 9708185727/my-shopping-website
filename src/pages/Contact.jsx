import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Here, you would typically send the form data to a server
    // via an API endpoint.
  };

  return (
    <>
      <div className="  max-w-full max-h-screen m-0 mx-10 my-4 text-center h-auto  ">
        <div className="grid grid-cols-2 me-20  ">

      
        <div className="p-2 my-3 ms-12 w-96 shadow-md">
          <h1 className="text-center p-2 my-2 text-teal-700 text-3xl font-semibold">
            Contact Us
          </h1>
          <p className="m-4  text-justify">
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you as soon as possible.
          </p>

          <form className="text-center my-4 " onSubmit={handleSubmit}>
            <div className="form-group my-4 ">
              <label htmlFor="name" className="text-1xl ">
                Name
              </label>
              <input
                className="border border-black ms-2 rounded-sm"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="border border-black ms-2 rounded-sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-5">
              <label htmlFor="message">Message</label>
              <textarea
                className="border border-black ms-2 rounded-sm h-5"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 my-3 py-1 bg-teal-500 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.197181452384!2d81.11920227466061!3d28.533792375718768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20d9dd64aa6a1%3A0xeacbf5519707949c!2sRN%20motor%20work%20shop!5e0!3m2!1sen!2snp!4v1729240026519!5m2!1sen!2snp"
            width="600"
            height="400"
            className="rounded-lg"
          
            allowfullscreen=""
            loading="lazy"
          
          ></iframe>
        </div>  
        </div>

        <section className="bg-white max-w-screen-xl h-auto   relative">
        <Footer />
        </section>
      </div>
    </>
  );
};

export default Contact;
