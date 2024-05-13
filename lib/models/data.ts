import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Yari',
            email: 'narducciyari@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Anna',
            email: 'annarossi@example.com',
            password: bcrypt.hashSync('654321'),
            isAdmin: false
        },
    ],
    products: [
        {

            name: "Free Shirt",
            slug: "free-shirt",
            category: "Shirts",
            image: "/images/shirt1.jpg",
            price: 45,
            brand: "Blow",
            description: "A very simple shirt",
            rating: 4.5,
            isFeatured: true,
            numReviews: 9,
            countInStocks: 20,
            banner: "/images/banner1.jpg",

        },
        {

            name: "Fit Shirt",
            slug: "fit-shirt",
            category: "Shirts",
            image: "/images/shirt2.jpg",
            price: 34,
            brand: "Adidas",
            description: "A very simple shirt for fitness",
            rating: 4.2,
            isFeatured: true,
            numReviews: 3,
            countInStocks: 20,
            banner: "/images/banner1.jpg",

        },

        {

            name: "Shirt Ralph Laureen",
            slug: "shirt-ralph",
            category: "Shirts",
            image: "/images/shirt3.jpg ",
            price: 34,
            brand: "Ralph Laureen",
            description: "A very simple shirt",
            rating: 4.5,
            isFeatured: true,
            numReviews: 9,
            countInStocks: 20,
            banner: "/images/banner1.jpg",

        },

        {

            name: "Golf Pants",
            slug: "golf-pants",
            category: "Pants",
            image: "/images/pants1.jpg ",
            price: 23,
            brand: "Maninfinity",
            description: "A very good pants",
            rating: 2.5,
            isFeatured: true,
            numReviews: 19,
            countInStocks: 20,
            banner: "/images/banner2.webp",

        },

        {

            name: "Casual Pants",
            slug: "casual-pants",
            category: "Pants",
            image: "/images/pants2.jpeg ",
            price: 15,
            brand: "Shein",
            description: "A very simple pants",
            rating: 4.3,
            isFeatured: true,
            numReviews: 9,
            countInStocks: 20,
            banner: "/images/banner2.webp",

        },

        {

            name: "Office Pants",
            slug: "office-pants",
            category: "Pants",
            image: "/images/pants3.jpeg ",
            price: 45,
            brand: "Only and Sons",
            description: "Good for the office work",
            rating: 4.9,
            isFeatured: true,
            numReviews: 29,
            countInStocks: 20,
            banner: "/images/banner2.webp",

        },
    ]
}
export default data;