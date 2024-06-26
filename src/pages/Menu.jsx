import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';
import StartersImg from '../utils/img/starters.jpg';
import ComboImg from '../utils/img/combo.jpg';

const combo = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.',
        price: 'Rs.350'
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
        price: 'Rs.300'
    },
    {
        id: 3,
        name: 'Veggie Burger',
        description: 'Vegetable patty with lettuce, tomato, and a tangy sauce in a whole wheat bun.',
        price: 'Rs.160'
    },
    {
        id: 4,
        name: 'Classic French Fries',
        description: 'Golden, crispy French fries lightly salted.',
        price: 'Rs.80'
    },
    {
        id: 5,
        name: 'Fettuccine Alfredo',
        description: 'Fettuccine pasta in a creamy Alfredo sauce with parmesan cheese.',
        price: 'Rs.280'
    },
    {
        id: 5,
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and your choice of chicken, beef, or tofu.',
        price: 'Rs.250'
    },
]

const starters = [
    {
        id: 1,
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in yogurt and spices, grilled to perfection.',
        price: 'Rs.250'
    },
    {
        id: 2,
        name: 'Paneer Tikka',
        description: 'Chunks of paneer marinated in a blend of spices and grilled till charred.',
        price: 'Rs.220'
    },
    {
        id: 3,
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas, served with chutney.',
        price: 'Rs.50'
    },
    {
        id: 4,
        name: 'Spring Rolls',
        description: 'Crispy rolls stuffed with vegetables and noodles, served with sweet chili sauce.',
        price: 'Rs.120'
    },
    {
        id: 5,
        name: 'Prawn Cocktail',
        description: 'Juicy prawns served with a tangy cocktail sauce.',
        price: 'Rs.300'
    },
    {
        id: 6,
        name: 'Stuffed Mushrooms',
        description: 'Mushrooms filled with cheese and herbs, baked till golden brown.',
        price: 'Rs.180'
    }
];

const breakfast = [
    {
        id: 1,
        name: 'Masala Dosa',
        description: 'Thin rice crepes filled with spiced potato masala, served with coconut chutney and sambar.',
        price: 'Rs.200'
    },
    {
        id: 2,
        name: 'Idli Sambhar ',
        description: 'Steamed rice cakes served with spicy lentil soup (sambhar) and coconut chutney.',
        price: 'Rs.100'
    },
    {
        id: 3,
        name: 'Paratha',
        description: 'Flaky whole wheat flatbread stuffed with potatoes (aloo paratha) or paneer (paneer paratha), served with yogurt or pickle.',
        price: 'Rs.80'
    },
    {
        id: 4,
        name: 'Upma',
        description: ' Savory semolina porridge cooked with vegetables, mustard seeds, curry leaves, and spices.',
        price: 'Rs.90'
    },
    {
        id: 5,
        name: 'Poha',
        description: 'Flattened rice cooked with onions, mustard seeds, turmeric, and spices, garnished with peanuts and fresh coriander.',
        price: 'Rs.90'
    },
    {
        id: 6,
        name: 'Methi Thepla ',
        description: 'Gujarati-style flatbread made with fenugreek leaves, served with pickle or yogurt.',
        price: 'Rs.90'
    }

];
const lunch = [
    {
        id: 1,
        name: 'Paneer Tikka Masala',
        description: 'Grilled paneer cubes cooked in a creamy tomato and onion gravy, served with naan or rice.',
        price: 'Rs.150'
    },
    {
        id: 2,
        name: 'Dal Makhani ',
        description: 'Slow-cooked black lentils simmered with butter, cream, and spices, garnished with fresh cream and coriander.',
        price: 'Rs.140'
    },
    {
        id: 3,
        name: 'Palak Paneer',
        description: 'Soft paneer cubes in a creamy spinach gravy, flavored with garlic, cumin, and garam masala, served with rice or roti.',
        price: 'Rs.120'
    },
    {
        id: 4,
        name: 'Aloo Gobi',
        description: 'Stir-fried potatoes and cauliflower florets cooked with onions, tomatoes, and spices, served with roti or paratha.',
        price: 'Rs.120'
    },
    {
        id: 5,
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with marinated chicken, spices, and saffron, served with raita.',
        price: 'Rs.300'
    },
    {
        id: 6,
        name: 'Mutton Korma',
        description: 'Succulent mutton pieces simmered in a rich and creamy cashew nut and yogurt sauce, garnished with fried onions and coriander, served with roti or rice.',
        price: 'Rs.620'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Fish Curry',
        description: 'Fish fillets simmered in a tangy and spicy coconut or tomato-based curry, served with steamed rice.',
        price: 'Rs.500'
    },
    {
        id: 2,
        name: 'Vegetable Biryani',
        description: 'Fragrant basmati rice cooked with mixed vegetables, spices, and saffron, served with raita.',
        price: 'Rs.250'
    },
    {
        id: 3,
        name: 'Chole Bhature ',
        description: 'Spicy chickpea curry served with deep-fried fluffy bread (bhature), accompanied by onions and pickle.',
        price: 'Rs.120'
    },
    {
        id: 4,
        name: 'Butter Chicken',
        description: 'Tandoori chicken pieces cooked in a rich tomato and butter sauce, flavored with fenugreek leaves and cream, served with naan or rice.',
        price: 'Rs.470'
    },
    {
        id: 5,
        name: 'Rogan Josh',
        description: 'Tender lamb pieces cooked in a spicy yogurt and tomato-based gravy, garnished with fried onions and fresh coriander, served with naan or rice.',
        price: 'Rs.450'
    },
    {
        id: 6,
        name: 'Chole Bhature ',
        description: 'Spicy chickpea curry served with deep-fried fluffy bread (bhature), accompanied by onions and pickle.',
        price: 'Rs.120'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Classic Chocolate Cake',
        description: 'Rich and moist chocolate cake layered with decadent chocolate ganache. A timeless favorite for chocolate lovers.',
        price: 'Rs.290'
    },
    {
        id: 2,
        name: 'New York Cheesecake',
        description: 'Creamy and indulgent cheesecake with a buttery graham cracker crust. Topped with your choice of fresh berries or caramel sauce.',
        price: 'Rs.310'
    },
    {
        id: 3,
        name: 'Fruit Tart',
        description: 'Delicate tart shell filled with vanilla pastry cream and topped with a colorful assortment of fresh seasonal fruits.',
        price: 'Rs.180'
    },
    {
        id: 4,
        name: 'Molten Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center. Served with a scoop of vanilla ice cream for the perfect sweet indulgence.',
        price: 'Rs.290'
    },
    {
        id: 5,
        name: 'Churros with Chocolate Sauce',
        description: 'Crispy fried churros dusted with cinnamon sugar and served with a rich, velvety chocolate dipping sauce.',
        price: 'Rs.310'
    },
    {
        id: 6,
        name: 'Panna Cotta',
        description: 'Silky smooth Italian dessert flavored with vanilla bean and topped with a sweet berry compote.',
        price: 'Rs.250'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='combo my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Combo Meal</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ComboImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {combo.map((combo) => (
                                <div key={combo.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {combo.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {combo.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {combo.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='starters bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Starters</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {starters.map((starters) => (
                                <div key={starters.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {starters.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {starters.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {starters.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={StartersImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>




            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;