import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <h2>About Sharpcuisine</h2>
                <p>
                    Welcome to Sharpcuisine, where culinary excellence meets unparalleled convenience. Our mission is to bring the world’s finest flavors right to your doorstep, transforming every meal into a delightful dining experience.
                </p>
                <p>
                    At Sharpcuisine, we believe that great food has the power to create memorable moments and bring people together. Our journey began with a simple idea: to make gourmet dining accessible to everyone, no matter where they are. Whether you're a busy professional, a family looking for a convenient meal solution, or someone who simply loves great food, Sharpcuisine is here to serve you.
                </p>

                <br />
                <h3>Our Story</h3>
                <p>
                    Sharpcuisine was born out of a passion for exceptional food and a desire to make gourmet dining accessible to everyone. Our journey began in a small, humble kitchen, where a group of food enthusiasts came together with a shared vision: to revolutionize the way people experience food. We believed that everyone deserves to enjoy restaurant-quality meals without the need to step out of their homes, and thus, Sharpcuisine was created.
                </p>
                <p>
                    Our founder, a culinary expert with years of experience in the food industry, was inspired by the rich culinary traditions and diverse flavors from around the world. This inspiration led to the creation of a menu that not only celebrates international cuisine but also honors local ingredients and cooking techniques. The goal was simple – to deliver a dining experience that delights the senses and brings comfort and joy to our customers.
                </p>

                <h3>Our Commitment</h3>
                <p>
                    At Sharpcuisine, we believe that great food is at the heart of great memories. Our chefs are dedicated to crafting dishes that not only satisfy your hunger but also excite your taste buds. We source the freshest ingredients from trusted suppliers, ensuring that every bite you take is bursting with flavor and nutrition.
                </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="Chef 1" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="Chef 2" />
                    </div>
                </div>

                <h3>Why Choose Sharpcuisine?</h3><br />
                <ul>
                    <li>Quality Ingredients: We use only the finest, freshest ingredients to prepare our meals. Our commitment to quality is evident in every dish we create.</li><br />
                    <li>Diverse Menu: From classic comfort foods to exotic international cuisines, our menu is designed to cater to all tastes and preferences.</li><br />
                    <li>Convenient Ordering: Our user-friendly platform makes it easy to browse our menu, place your order, and track your delivery in real-time.</li><br />
                    <li>Fast Delivery: We understand that when you're hungry, you don't want to wait. Our efficient delivery system ensures your food arrives hot and fresh, right when you need it.</li><br />
                    <li>Sustainable Practices: We are committed to sustainability, using eco-friendly packaging and minimizing food waste wherever possible.</li>
                </ul>
                <br></br>
                <h3>Join Us on Our Culinary Journey</h3>
                <p>
                    Whether you're craving a quick bite or planning a special dinner, Sharpcuisine is here to make every meal extraordinary. Join our community of food lovers and discover the convenience and joy of having your favorite dishes delivered to your door.

                    <p>Thank you for choosing Sharpcuisine. We look forward to serving you!</p>
                </p>


            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    );
}

export default About;
