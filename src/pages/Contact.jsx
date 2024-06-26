import React from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';

function Contact() {
    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center'>
    <h3 className='my-3'>Virtual Customer Assistance</h3>
    <Form className='d-grid gap-2'>
        <button type='submit' className='btn btn-success btn-lg my-2'>Track Current Order</button>
        <button type='submit' className='btn btn-success btn-lg my-2'>Queries & Feedback</button>
        <button type='submit' className='btn btn-success btn-lg my-2'>Contact Store</button>
    </Form>
</div>

                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default Contact;
