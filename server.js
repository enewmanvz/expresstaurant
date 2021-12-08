const express = require('express')
const path = require('path') //node native module
//const {Restaurant, Menu, Item} = require('./index')
const { Restaurant } = require('./models/Restaurant')
const { Menu } = require('./models/Menu')
const { Item } = require('./models/Item')

const app = express()
const port = 3000

//ALLOW EXPRESS TO READ JSON REQUEST BODIES
app.use(express.json());

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1){
        coinflip = 'Heads'
    } else {
        coinflip = 'Tails'
    }
    res.send(coinflip)
})

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    console.log(req)
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json object
    res.json(allRestaurants)
})
//GET method on /restaurant/:id route returns requested restaurant id
app.get('/restaurants/:id', async (req,res) => {
    console.log(req)
    //find the req. id: instance of the Model Restaurant
    const allRestaurants = await Restaurant.findByPk(req.params.id)
    //respond with the req. id of req. Restaurant as a json objeect
    res.json(allRestaurants)
})
//return one restaurant by name
app.get('/restaurant-name/:name', async(req,res)=>{   
    const thisRestaurant = await Restaurant.findOne({where:{name: req.params.name}})
    res.json(thisRestaurant)
})
//create one restaurant (Using postman CRUD)
app.post('/restaurants', async (req,res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.send('Restaurant created')
})
//update one restaurant by id(Using postman CRUD)
app.put('/restaurants/:id', async (req,res) => {
    let updatedRestaruant = await Restaurant.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updatedRestaurant ? "Restaurant Updated" : "update Failed")
})

//GET method on /menus route returns all menus
//request: http://localhost:3000/menus
//response: array of all menus in json format
//async because we are awaiting on data from a db

//route returns all menus
app.get('/menus', async (req,res)=> {
    const allMenus = await Menu.findAll()
    console.log(req)
       res.json(allMenus)
})
//returns requested /menu/:id route
app.get('/menus/:id', async (req,res) => {
    console.log(req)
    const allMenus = await Menu.findByPk(req.params.id)
    res.json(allMenus)
})
//return one menu by name
app.get('/menu-name/:name', async(req,res)=>{   
    const thisMenu = await Menu.findOne({where:{name: req.params.name}})
    res.json(thisMenu)
})
//create one menu (Using postman CRUD)
app.post('/menus', async (req,res) => {
    let newMenu = await Menu.create(req.body)
    res.send('Menu created')
})
//update one menu by id(Using postman CRUD)
app.put('/menus/:id', async (req,res) => {
    let updatedMenu = await Menu.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updatedMenu ? "Menu Updated" : "update Failed")
})

// returns returns all items
app.get('/item', async (req,res)=> {
     const allItems = await Item.findAll()
     console.log(req)
        res.json(allItems)
 })
//returns requested /item/:id route 
app.get('/items/:id', async (req,res) => {
    console.log(req)
    const allItems = await Item.findByPk(req.params.id)
    res.json(allItems)
})
//return one item by name
app.get('/item-name/:name', async(req,res)=>{   
    const thisItem = await Item.findOne({where:{name: req.params.name}})
    res.json(thisItem)
})
//create one item (Using postman CRUD)
app.post('/items', async (req,res) => {
    let newItem = await Item.create(req.body)
    res.send('Item created')
})
//update one item by id(Using postman CRUD)
app.put('/items/:id', async (req,res) => {
    let updatedItem = await Item.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updatedItem ? "Item Updated" : "update Failed")
})




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})