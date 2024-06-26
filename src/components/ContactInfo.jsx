import React from "react";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Contact Us</h2><br></br>
            <h3 className=" text-uppercase ">Address</h3>
            <p>123 Delicious Street
            Foodie City, Yummyland , Delhi, India</p>
            <h3>Operating Hours</h3>
            <p className="m-0">Monday - Friday: 9:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
            <p>(Holiday hours may vary)</p>
            <h3>Email Address</h3>
            <p >sharpcuisine@tastydelivery.com</p>
            <h3>Phone Number</h3>
            <p>8818100009</p>
        </div>
    )
}