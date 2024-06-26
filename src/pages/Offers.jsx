import React from 'react';
import './offers.css';

function Offers() {
    return (
        <div className='offers-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-dark'>Special Offers</h1>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='text-success'>Current Offers</h2>
                        <ul className='list-unstyled offer-list'>
                            <li className='my-3'>🍕 Buy one get one free on all pizzas!</li>
                            <li className='my-3'>💸 20% off on orders above Rs.500</li>
                            <li className='my-3'>🍰 Free dessert with every combo meal</li>
                            <li className='my-3'>🛵 Free delivery on orders above Rs.300</li>
                            <li className='my-3'>🍔 Combo deal: Buy 2 burgers, get 1 free</li>
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='text-success'>Upcoming Offers</h2>
                        <ul className='list-unstyled offer-list'>
                            <li className='my-3'>🔜 Flat 30% off on all items next weekend</li>
                            <li className='my-3'>🥤 Free drink with every burger</li>
                            <li className='my-3'>📱 Exclusive discounts for app users</li>
                            <li className='my-3'>🍕 Pizza festival: Up to 50% off on select pizzas</li>
                            <li className='my-3'>🍝 Pasta day: 25% off on all pasta dishes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;
