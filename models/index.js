const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Restaurant} = require('.models/Restaurant')
const { Menu } = require('.models/Menu')
const { Item } = require('.models/Item')

//associate models
//adds foreign key to musician table connecting a musician instance to a specific band
Menu.belongsTo(Restaurant)
//gives us sequelize methods for a one to many relationship
Restaurant.hasMany(Menu)
Item.belongsTo(Menu)
Menu.hasMany(Item)

//export models with added associations
module.exports = {Menu, Restaurant, Item, sequelize}