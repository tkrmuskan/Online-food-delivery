import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import LocationImg from '../utils/img/location.jpg';
// import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import { Form } from 'react-bootstrap';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Sharpcuisine</h1>
                            <h2 className='mb-0 text-black fw-bold my-4'>Deliciously Delivered: Enjoy Gourmet Dining at Your Doorstep!</h2>
                            <br />
                            {/* <MenuBtn /> */}
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>

                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Set Location</h2>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='location'>Delivery Location</Form.Label>
                                    <Form.Control type='text' id='location' placeholder='Enter delivery location' />
                                </Form.Group>
                                <button type='submit' className='btn btn-success btn-lg'>Set Location</button>
                            </Form>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={LocationImg} className='img-fluid w-50' alt="about img" />
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Login</h2>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='username'>Username or Email</Form.Label>
                                    <Form.Control type='text' id='username' placeholder='Enter username or email' />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='password'>Password</Form.Label>
                                    <Form.Control type='password' id='password' placeholder='Enter password' />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Check type='checkbox' label='Remember Me' id='remember-me' />
                                </Form.Group>
                                <button type='submit' className='btn btn-success btn-lg'>Login</button>
                                <a href='/forgot-password' className='ms-2'>Forgot Password?</a>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>English Breakfast</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.120</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spicy Beef</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.150</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.110</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.200</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Juice</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.100</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spirits</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>Rs.150</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="Contact" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
