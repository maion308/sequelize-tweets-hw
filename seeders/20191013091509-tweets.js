'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


  
      return queryInterface.bulkInsert('Tweets', [{
    "id": 1,
    "text": "I'm releasing new music this month",
    "hashtag": "#new",
    "retweets": 72,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "id": 2,
    "text": "Should I do a cooking show?",
    "hashtag": "#cooking",
    "retweets": 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "id": 3,
    "text": "If Hooks aren’t working out for you, share your experiences!",
    "hashtag": "#react",
    "retweets": 600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "id": 4,
    "text": "In Sweden, you can buy toilet paper called Kräpp.",
    "hashtag": "#sweden",
    "retweets": 413,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "id": 5,
    "text": "In 1973, the entire Internet consisted of only 42 computers.",
    "hashtag": "#wow",
    "retweets": 89,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "id": 6,
    "text": "Brad Pitt's first employer was El Pollo Loco (Crazy Chicken) where he had to dress as a chicken, hand out flyers, and attract customers to the restaurant.",
    "hashtag": "#glowup",
    "retweets": 42,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};