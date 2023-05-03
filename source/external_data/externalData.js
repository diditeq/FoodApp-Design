const categories = [
  {
    id: 0,
    title: "Grilled Cheese Salad with cream",
    image: require("../assets/images/cheese_Salad.jpg"),
    price: 15.50,
    rating: 4.7,
    distance: '2.3km',
    approximateTime: '20 - 24 Min',
    description: 'Originating from Cyprus, semisoft and sligtly nutty halloumi cheese resists melting when heated, so you can luxuriate',
    },
  {
    id: 1,
    title: "Pizza Napolete",
    image: require("../assets/images/piza1.jpg"),
    price: 12.4,
    rating: 3.7,
    distance: '4.2km',
    approximateTime: '20-30 Min',
    description: 'Originating from Cyprus, semisoft and sligtly nutty halloumi cheese resists melting when heated, so you can luxuriate',
    },
  {
    id: 2,
    title: "Spagheti Bolognese",
    image: require("../assets/images/csal1.jpg"),
    price: 30,
    rating: 5,
    distance: '1.2km',
    approximateTime: '5-20 Min',
    description: 'Originating from Cyprus, semisoft and sligtly nutty halloumi cheese resists melting when heated, so you can luxuriate',
    },
  {
    id: 3,
    title: "Chinese Cusine",
    image: require("../assets/images/grilled_chicken.jpg"),
    price: 30,
    rating: 5.0,
    distance: '0.5km',
    approximateTime: '1-10 Min',
    description: 'Originating from Cyprus, semisoft and sligtly nutty halloumi cheese resists melting when heated, so you can luxuriate',
    },
];


const nearFoods = [
  {
    id: 0,
    title: "Big Fried Chicken",
    image: require("../assets/images/bigchicken.jpg"),
    price: 4.2,
    rating: 4.4,
    location: 'Gaminbar • 9.2km',
  },
  {
    id: 1,
    title: "Grilled Chicken",
    image: require("../assets/images/grilled_chicken.jpg"),
    price: 20,
    rating: 5.0,
    location: 'Los Angelis • 5km',
  },
  {
    id: 2,
    title: "Spagheti Bolognese",
    image: require("../assets/images/spa2.jpg"),
    price: 25.00,
    rating: 4.0,
    location: 'San Diego • 3km',
  },
  {
    id: 3,
    title: "Pizza Jungle",
    image: require("../assets/images/piza1.jpg"),
    price: 15.00,
    rating: 4.0,
    location: 'Miamee• 7.5km',
  },
];


export { categories, nearFoods };