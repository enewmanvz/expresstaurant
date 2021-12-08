const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Item} = require('./models/Item')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'McDowells',
    location: 'New York',
    cuisine: 'American'
  },
  {
    name: 'LaMadeleine',
    location: 'Dallas',
    cuisine: 'French'
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian'
  },
  {
    name: 'Burger King',
    location: 'Cedar Hill',
    cuisine: 'American'
  },
  {
    name: 'Apple Bees',
    location: 'Cedar Hill',
    cuisine: 'American'
  },
]

const seedMenu = [
  {
    name: 'Breakfast',
    entree: 'All Day Breakfast',
    RestaurantId : 1,
  },
  {
    name: 'Lunch',
    entree: 'Lunch Classics',
    RestaurantId : 2,
  },
  {
    name: 'Dinner',
    entree:'Dinner Favorites',
    RestaurantId : 3,
  },
]

const seedItem = [
  {
    name: 'Chocolate Croissant',
    image: 'someimage.jpg',
    price: 3.99,
    calories: 100,
    MenuId : 7,
  },
  {
    name: 'Big McDowell Meal',
    image: 'someimage.jpg',
    price: 7.99,
    calories: 1080,
    MenuId : 6,
  },
  {
    name: 'Chicken Cobb Salad',
    image: 'someimage.jpg',
    price: 9.50,
    calories: 950,
    MenuId : 5,
  },
  {
    name: 'Crossant Sandwhich',
    image: 'someimage.jpg',
    price: 9.50,
    calories: 840,
    MenuId : 4,
  },  
  {
    name: 'Chicken Tikka Masala',
    image: 'someimage.jpg',
    price: 9.50,
    calories: 1249,
    MenuId : 3,
  },
  {
    name: 'Chicken Pesto Pasta',
    image: 'someimage.jpg',
    price: 10.50,
    calories: 985,
    MenuId : 2,
  },
  {
    name: 'Spicy ChicKing Sandwich',
    image: 'someimage.jpg',
    price: 6.50,
    calories: false,
    MenuId : 1,
  }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })