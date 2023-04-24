const Sequelize = require('sequelize');

// Define the database connection
const sequelize = new Sequelize('boqcjtcfkovaacs2nc0l', 'uujhovwnmqulgvzh', 'bI36ETAD4TVuExqYRNzD', {
  host: 'boqcjtcfkovaacs2nc0l-mysql.services.clever-cloud.com',
 
  dialect: 'mysql'
});

// Define the Product model using Sequelize
const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

// Synchronize the model with the database to create the table(s)
sequelize.sync().then(() => {
  console.log('Database synchronized!');
}).catch((err) => {
  console.error('Error synchronizing database:', err);
});

module.exports = Product;




