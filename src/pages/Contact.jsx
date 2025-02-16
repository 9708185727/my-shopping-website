import React, { useState } from "react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { addContact } from "../api/contact";
import ContactForm from "../components/ContactForm";

const Contact = () => {
 
 
  return (
    <>
      <div className="  max-w-screen-xl max-h-screen  mx-2 md:mx-10 lg:mx-10 my-4 text-center h-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 me-20  ">

      
        <div className="p-2 my-3 ms-12 w-auto shadow-md">
          <h1 className="text-center p-2 my-2 text-teal-700 text-3xl font-semibold">
            Contact Us
          </h1>
          <p className="m-4  text-justify min-w-48">
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you as soon as possible.
          </p>

        <ContactForm/>
        </div>
        <div className="w-auto mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.197181452384!2d81.11920227466061!3d28.533792375718768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20d9dd64aa6a1%3A0xeacbf5519707949c!2sRN%20motor%20work%20shop!5e0!3m2!1sen!2snp!4v1729240026519!5m2!1sen!2snp"
          
            height="400"
            className="rounded-lg ms-12   min-w-auto md:w-full lg:w-full"
          
            allowfullscreen=""
            loading="lazy"
          
          ></iframe>
        </div>  
        </div>

        <section className="bg-white max-w-screen-xl h-auto mt-5  relative">
        <Footer />
        </section>
      </div>
    </>
  );
};

export default Contact;
